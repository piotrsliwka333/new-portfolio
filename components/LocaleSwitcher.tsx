import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { locales } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={"Language"}>
      {locales.map((cur: string) => (
        <option
          key={cur}
          value={cur}
          className={`bg-black text-white`}
          // className={cn(
          //   "flex cursor-pointer items-center justify-center text-sm leading-[110%] w-8 py-1 rounded-md  hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_var(--neutral-600)_inset] transition duration-200",
          //   locale === cur
          //     ? "bg-neutral-800 text-white shadow-[0px_1px_0px_0px_var(--neutral-600)_inset]"
          //     : ""
          // )}
        >
          {cur}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
