import { ReactNode } from "react";

export interface Project {
  projectNumber: number;
  title: string;
  description: string;
  imageUrl: string;
  linkToFrontendProd: string;
  linkToBackendProd?: string;
  linkToFrontendDev?: string;
  linkToBackendDev?: string;
  linkToFigma?: string;
  linkToFrontendRepo?: string;
  linkToBackendRepo?: string;
  extraInfo1?: string;
  extraInfo2?: string;
  usedTechnologies: Technology[];
}

export interface ProjectWithDecoration extends Project {
  icon: ReactNode;
  content: ReactNode;
}
