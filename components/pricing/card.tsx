import { cn } from "@/lib/utils";
import { PaymentType, Plan } from "@/models/Plan";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../elements/button";
import Portal from "../elements/portal";
import { Divider } from "./divider";
import { Step } from "./step";
import { useTranslations } from "next-intl";
import { isEmailValid } from "@/utils/is-email-valid/is-email-valid";

interface OwnProps {
  plan: Plan;
}

enum FORM_STATUS {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  NOT_SEND = "NOT_SEND",
}

export const Card: React.FC<OwnProps> = (props) => {
  const { plan } = props;

  const [showModal, setShowModal] = useState(false);
  const [projetType] = useState<string>(plan.name);

  const [fullName, setFullName] = useState<string>("");
  const [fullNameError, setFullNameError] = useState<null | string>(null);

  const [clientEmail, setClientEmail] = useState<string>("");
  const [errorClientEmail, setErrorClientEmail] = useState<null | string>(null);

  const [message, setMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const [formStatus, setFormStatus] = useState<FORM_STATUS>(
    FORM_STATUS.NOT_SEND
  );
  const [isFormLoading, setIsFormLoading] = useState<boolean>(false);

  const t = useTranslations("home.pricing");
  const tButtons = useTranslations("");
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChangeFullName = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value } = target;

    setFullName(value);
    if (value.length === 0)
      return setFullNameError(t("form.inputs.input2.errors.required"));
    setFullNameError(null);
  };

  const handleChangeClientEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value } = target;

    setClientEmail(value);
    if (value.length === 0)
      return setErrorClientEmail(t("form.inputs.input3.errors.required"));
    if (!isEmailValid(value))
      return setErrorClientEmail(t("form.inputs.input3.errors.invalid"));
    setErrorClientEmail(null);
  };

  const handleChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = event;
    const { value } = target;

    setMessage(value);
    if (value.length === 0)
      return setErrorMessage(t("form.inputs.input4.errors.required"));
    setErrorMessage(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = [];

    if (fullName.length === 0) {
      setFullNameError(t("form.inputs.input2.errors.required"));
      errors.push(t("form.inputs.input2.errors.required"));
    }

    if (clientEmail.length === 0) {
      setErrorClientEmail(t("form.inputs.input3.errors.required"));
      errors.push(t("form.inputs.input3.errors.required"));
    }

    if (message.length === 0) {
      setErrorMessage(t("form.inputs.input4.errors.required"));
      errors.push(t("form.inputs.input4.errors.required"));
    }

    if (errors.length > 0 || fullNameError || errorClientEmail || errorMessage)
      return;

    const init: RequestInit = {};

    const payload = {
      projetType,
      fullName,
      clientEmail,
      message,
    };

    try {
      setFormStatus(FORM_STATUS.NOT_SEND);
      setIsFormLoading(true);
      console.log("312321");
      const response = await fetch("https://formspree.io/f/xjkgbded", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        return setFormStatus(FORM_STATUS.ERROR);
      }
      setFormStatus(FORM_STATUS.SUCCESS);
    } catch (e) {
      console.log("catch", e);
      return setFormStatus(FORM_STATUS.ERROR);
    } finally {
      setIsFormLoading(false);
    }
  };

  return (
    <div
      className={cn(
        "p-4 md:p-4 rounded-3xl bg-neutral-900 border-2 border-neutral-800",
        plan.featured && "border-neutral-50 bg-neutral-100"
      )}
    >
      <div
        className={cn(
          "p-4 mb-8 bg-neutral-800 rounded-2xl shadow-[0px_-1px_0px_0px_var(--neutral-700)]",
          plan.featured && "bg-white shadow-aceternity"
        )}
      >
        <div className="flex justify-between items-center">
          <p className={cn("font-medium", plan.featured && "text-black")}>
            {plan.name}
          </p>
          {plan.featured && (
            <div
              className={cn(
                "font-medium text-xs px-3 py-1 rounded-full relative bg-neutral-900"
              )}
            >
              <div className="absolute inset-x-0 bottom-0 w-3/4 mx-auto h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
              Featured
            </div>
          )}
        </div>

        <div className="mt-8">
          {plan.price && (
            <span
              className={cn(
                "text-lg font-bold text-neutral-500",
                plan.featured && "text-neutral-700"
              )}
            >
              {plan.paymentType === PaymentType.ONE_TIME && "From"}
            </span>
          )}
          <span
            className={cn("text-4xl font-bold", plan.featured && "text-black")}
          >
            {plan.price || plan?.CTA?.text}
            {plan.paymentType === PaymentType.HOUR && "/h"}
          </span>
          {plan.price && (
            <span
              className={cn(
                "text-lg font-normal text-neutral-500 ml-2",
                plan.featured && "text-neutral-700"
              )}
            >
              PLN
            </span>
          )}
        </div>
        <Button
          variant="outline"
          className={cn(
            "w-full mt-10 mb-4",
            plan.featured &&
              "bg-black text-white hover:bg-black/80 hover:text-white"
          )}
          onClick={handleOpenModal}
        >
          {plan?.CTA?.text}
        </Button>
        <Portal
          fancyBackground={false}
          showModal={showModal}
          onClose={handleCloseModal}
        >
          <form
            noValidate
            className="space-y-4 mx-auto max-w-[500px]"
            // action="https://formsubmit.co/81864bcfc149545ccbceb11198454b71"
            // method="POST"
            onSubmit={(event: FormEvent<HTMLFormElement>) =>
              handleSubmit(event)
            }
            // action="https://formspree.io/f/xjkgbded"
            // method="POST"
          >
            <h1>{t("form.title")}</h1>
            <p>{t("form.description")}</p>
            {formStatus !== FORM_STATUS.NOT_SEND && (
              <div
                className={cn(
                  "flex items-center p-4 mb-4 text-sm rounded-lg ",
                  formStatus === FORM_STATUS.SUCCESS
                    ? "text-green-400 border border-green-400"
                    : "text-red-400 border border-red-400 "
                )}
                role="alert"
              >
                <svg
                  className="flex-shrink-0 inline w-4 h-4 me-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <div>
                  <span className="font-medium">
                    {formStatus === FORM_STATUS.SUCCESS
                      ? t("form.alerts.success")
                      : t("form.alerts.error")}
                  </span>
                </div>
              </div>
            )}
            <div></div>
            <div>
              <label
                htmlFor="project_type"
                className="block text-sm font-medium leading-6 text-neutral-400 "
              >
                {t("form.inputs.input1.label")}
              </label>
              <input
                id="project_type"
                name="project_type"
                required
                defaultValue={plan.name}
                type="text"
                className="block w-full bg-neutral-900 px-4 rounded-md border-0 py-1.5  shadow-aceternity text-neutral-100 placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 "
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-neutral-400 "
              >
                {t("form.inputs.input2.label")}
              </label>
              <input
                id="name"
                required
                name="name"
                type="text"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChangeFullName(event)
                }
                value={fullName}
                placeholder={t("form.inputs.input2.placeholder")}
                className="block w-full bg-neutral-900 px-4 rounded-md border-0 py-1.5  shadow-aceternity text-neutral-100 placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 "
              />
              {fullNameError && (
                <p className="text-xs font-medium leading-6 text-red-600 mt-0.5">
                  {fullNameError}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-neutral-400 "
              >
                {t("form.inputs.input3.label")}
              </label>
              <input
                id="email"
                name="email"
                required
                value={clientEmail}
                onChange={handleChangeClientEmail}
                type="email"
                placeholder={t("form.inputs.input3.placeholder")}
                className="block w-full bg-neutral-900 px-4 rounded-md border-0 py-1.5  shadow-aceternity text-neutral-100 placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 "
              />
              {errorClientEmail && (
                <p className="text-xs font-medium leading-6 text-red-600 mt-0.5">
                  {errorClientEmail}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-6 text-neutral-400 "
              >
                {t("form.inputs.input4.label")}
              </label>
              <textarea
                rows={5}
                id="message"
                required
                onChange={handleChangeMessage}
                value={message}
                name="message"
                placeholder={t("form.inputs.input4.placeholder")}
                className="block w-full bg-neutral-900  px-4 rounded-md border-0 py-1.5  shadow-aceternity text-neutral-100 placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 "
              />
              {errorMessage && (
                <p className="text-xs font-medium leading-6 text-red-600 mt-0.5">
                  {errorMessage}
                </p>
              )}
            </div>
            <div>
              <Button className="w-full mt-6">
                {isFormLoading ? (
                  <svg
                    className="animate-spin h-5 w-5 mr-3 ..."
                    viewBox="0 0 24 24"
                    fill="black"
                  >
                    12312
                  </svg>
                ) : (
                  tButtons("shared.buttons.submit")
                )}
              </Button>
            </div>
          </form>
        </Portal>
      </div>
      {plan.points && plan.points.length > 0 && (
        <Divider text={t("whatInOffer")} featured={plan.featured} />
      )}
      <div className="mt-1 p-4">
        {plan.points.map((point, idx) => (
          <Step featured={plan.featured} key={idx}>
            {point}
          </Step>
        ))}
      </div>
      {plan.examples && plan.examples.length > 0 && (
        <Divider text={t("examples")} featured={plan.featured} />
      )}
      <div className="p-4">
        {plan.examples.map((example, idx) => (
          <Step featured={plan.featured} additional key={idx}>
            {example}
          </Step>
        ))}
      </div>
    </div>
  );
};
