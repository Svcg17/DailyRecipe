import React from "react";
import { Redirect } from "react-router-dom";

// Pages Component

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/FogetPassword";

import Dashboard from "../pages/Dashboard";

import Calendar from "../pages/Apps/Calendar/index";

import EmailInbox from "../pages/Apps/Email/inbox";
import EmailRead from "../pages/Apps/Email/read";
import EmailCompose from "../pages/Apps/Email/compose";

import Emailtemplatealert from "../pages/Apps/EmailTemplate/email-template-alert";
import Emailtemplatebasic from "../pages/Apps/EmailTemplate/email-template-basic";
import Emailtemplatebilling from "../pages/Apps/EmailTemplate/email-template-billing";

// UI Pages
import UiSweetAlert from "../pages/UI/UiSweetAlert";
import UiAlerts from "../pages/UI/Alerts";
import UiButtons from "../pages/UI/Buttons";
import UiCards from "../pages/UI/Cards";
import UiCarousel from "../pages/UI/Carousel";
import UiDropdown from "../pages/UI/Dropdown";
import UiGrid from "../pages/UI/Grid";
import UiImages from "../pages/UI/Images";
import UiLightbox from "../pages/UI/Lightbox";
import UiModals from "../pages/UI/Modals";
import UiRangeSlider from "../pages/UI/RangeSlider";
import UiSessionTimeout from "../pages/UI/SessionTimeout";
import Progressbar from "../pages/UI/Progressbar";
import TabsAccordion from "../pages/UI/TabsAccordion";
import Typography from "../pages/UI/Typography";
import Video from "../pages/UI/Video";
import General from "../pages/UI/General";
import Colors from "../pages/UI/Colors";
import Rating from "../pages/UI/Rating";

// Form
import FormElement from "../pages/Forms/FormElement";
import FormValidation from "../pages/Forms/FormValidation";
import FormAdvanced from "../pages/Forms/FormAdvanced";
import FormMask from "../pages/Forms/FormMask";
import FormRepeater from "../pages/Forms/FormRepeater";
import FormUpload from "../pages/Forms/FormUpload";
import FormXeditable from "../pages/Forms/FormXeditable";
import FormWizard from "../pages/Forms/FormWizard";
import FormEditor from "../pages/Forms/FormEditor";

// Charts
import ChartistChart from "../pages/Charts/ChartistChart";
import ChartjsChart from "../pages/Charts/ChartjsChart";
import ApexChart from "../pages/Charts/ApexChart";
import SarklineChart from "../pages/Charts/SarklineChart";
import EchartChart from "../pages/Charts/EChart";

//Tables
import TableBasic from "../pages/Tables/TableBasic";
import TableDatatable from "../pages/Tables/TableDatatable";
import TableResponsive from "../pages/Tables/TableResponsive";
import TableEditable from "../pages/Tables/TableEditable";

//Maps
import IconDripicons from "../pages/Icons/IconDripicons";
import IconFontAwesome from "../pages/Icons/IconFontAwesome";
import IconIon from "../pages/Icons/IconIon";
import IconMaterial from "../pages/Icons/IconMaterial";
import IconThemify from "../pages/Icons/IconThemify";
import IconTypicons from "../pages/Icons/IconTypicons";

//Maps
import MapsVector from "../pages/Maps/MapsVector";
import MapsGoogle from "../pages/Maps/MapsGoogle";

// Extra Pages
import PagesLogin2 from "../pages/ExtraPages/PagesLogin2";
import PagesRegister2 from "../pages/ExtraPages/PagesRegister2";
import PagesRecoverpw2 from "../pages/ExtraPages/PagesRecoverpw2";
import PagesLockScreen2 from "../pages/ExtraPages/PagesLockScreen2";

// Extra Pages
import PagesTimeline from "../pages/ExtraPages/PagesTimeline";
import PagesInvoice from "../pages/ExtraPages/PagesInvoice";
import PagesDirectory from "../pages/ExtraPages/PagesDirectory";
import PagesBlank from "../pages/ExtraPages/PagesBlank";
import PagesPricing from "../pages/ExtraPages/PagesPricing";
import PagesGallery from "../pages/ExtraPages/PagesGallery";
import PagesFaq from "../pages/ExtraPages/PagesFaq";
import Pages404 from "../pages/ExtraPages/Pages404";
import Pages500 from "../pages/ExtraPages/Pages500";
import PagesMaintenance from "../pages/ExtraPages/PagesMaintenance";
import PagesComingsoon from "../pages/ExtraPages/PagesComingsoon";

const authProtectedRoutes = [
  // Calendar
  { path: "/calendar", component: Calendar },

  // Email & Email Templates
  { path: "/email-inbox", component: EmailInbox },
  { path: "/email-read", component: EmailRead },
  { path: "/email-compose", component: EmailCompose },

  // Email Template
  { path: "/email-template-alert", component: Emailtemplatealert },
  { path: "/email-template-basic", component: Emailtemplatebasic },
  { path: "/email-template-billing", component: Emailtemplatebilling },

  // Ui Pages
  { path: "/ui-sweet-alert", component: UiSweetAlert },
  { path: "/ui-alerts", component: UiAlerts },
  { path: "/ui-buttons", component: UiButtons },
  { path: "/ui-cards", component: UiCards },
  { path: "/ui-carousel", component: UiCarousel },
  { path: "/ui-dropdowns", component: UiDropdown },
  { path: "/ui-grid", component: UiGrid },
  { path: "/ui-images", component: UiImages },
  { path: "/ui-lightbox", component: UiLightbox },
  { path: "/ui-modals", component: UiModals },
  { path: "/ui-rangeslider", component: UiRangeSlider },
  { path: "/ui-session-timeout", component: UiSessionTimeout },
  { path: "/ui-progressbars", component: Progressbar },
  { path: "/ui-tabs-accordions", component: TabsAccordion },
  { path: "/ui-typography", component: Typography },
  { path: "/ui-video", component: Video },
  { path: "/ui-general", component: General },
  { path: "/ui-colors", component: Colors },
  { path: "/ui-rating", component: Rating },

  // Form
  { path: "/form-elements", component: FormElement },
  { path: "/form-validation", component: FormValidation },
  { path: "/form-advanced", component: FormAdvanced },
  { path: "/form-mask", component: FormMask },
  { path: "/form-repeater", component: FormRepeater },
  { path: "/form-uploads", component: FormUpload },
  { path: "/form-xeditable", component: FormXeditable },
  { path: "/form-wizard", component: FormWizard },
  { path: "/form-editors", component: FormEditor },

  //Charts
  { path: "/charts-chartist", component: ChartistChart },
  { path: "/charts-chartjs", component: ChartjsChart },
  { path: "/apex-chart", component: ApexChart },
  { path: "/charts-sparkline", component: SarklineChart },
  { path: "/e-charts", component: EchartChart },

  //Tables
  { path: "/tables-basic", component: TableBasic },
  { path: "/tables-datatable", component: TableDatatable },
  { path: "/tables-responsive", component: TableResponsive },
  { path: "/tables-editable", component: TableEditable },

  //Icons
  { path: "/icons-dripicons", component: IconDripicons },
  { path: "/icons-fontawesome", component: IconFontAwesome },
  { path: "/icons-ion", component: IconIon },
  { path: "/icons-material", component: IconMaterial },
  { path: "/icons-themify", component: IconThemify },
  { path: "/icons-typicons", component: IconTypicons },

  // Maps
  { path: "/maps-google", component: MapsGoogle },
  { path: "/maps-vector", component: MapsVector },

  // Extra Pages
  { path: "/pages-timeline", component: PagesTimeline },
  { path: "/pages-invoice", component: PagesInvoice },
  { path: "/pages-directory", component: PagesDirectory },
  { path: "/pages-blank", component: PagesBlank },
  { path: "/pages-pricing", component: PagesPricing },
  { path: "/pages-gallery", component: PagesGallery },
  { path: "/pages-faq", component: PagesFaq },

  { path: "/dashboard", component: Dashboard },

  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }
];

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forget-password", component: ForgetPwd },
  { path: "/pages-register", component: Register },

  // Extra Pages
  { path: "/pages-login-2", component: PagesLogin2 },
  { path: "/pages-register-2", component: PagesRegister2 },
  { path: "/pages-recoverpw-2", component: PagesRecoverpw2 },
  { path: "/pages-lock-screen-2", component: PagesLockScreen2 },

  { path: "/pages-404", component: Pages404 },
  { path: "/pages-500", component: Pages500 },
  { path: "/pages-Maintenance", component: PagesMaintenance },
  { path: "/pages-comingsoon", component: PagesComingsoon }
];

export { authProtectedRoutes, publicRoutes };
