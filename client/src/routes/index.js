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
  { path: "/admin/calendar", component: Calendar },

  // Email & Email Templates
  { path: "/admin/email-inbox", component: EmailInbox },
  { path: "/admin/email-read", component: EmailRead },
  { path: "/admin/email-compose", component: EmailCompose },

  // Email Template
  { path: "/admin/email-template-alert", component: Emailtemplatealert },
  { path: "/admin/email-template-basic", component: Emailtemplatebasic },
  { path: "/admin/email-template-billing", component: Emailtemplatebilling },

  // Ui Pages
  { path: "/admin/ui-sweet-alert", component: UiSweetAlert },
  { path: "/admin/ui-alerts", component: UiAlerts },
  { path: "/admin/ui-buttons", component: UiButtons },
  { path: "/admin/ui-cards", component: UiCards },
  { path: "/admin/ui-carousel", component: UiCarousel },
  { path: "/admin/ui-dropdowns", component: UiDropdown },
  { path: "/admin/ui-grid", component: UiGrid },
  { path: "/admin/ui-images", component: UiImages },
  { path: "/admin/ui-lightbox", component: UiLightbox },
  { path: "/admin/ui-modals", component: UiModals },
  { path: "/admin/ui-rangeslider", component: UiRangeSlider },
  { path: "/admin/ui-session-timeout", component: UiSessionTimeout },
  { path: "/admin/ui-progressbars", component: Progressbar },
  { path: "/admin/ui-tabs-accordions", component: TabsAccordion },
  { path: "/admin/ui-typography", component: Typography },
  { path: "/admin/ui-video", component: Video },
  { path: "/admin/ui-general", component: General },
  { path: "/admin/ui-colors", component: Colors },
  { path: "/admin/ui-rating", component: Rating },

  // Form
  { path: "/admin/form-elements", component: FormElement },
  { path: "/admin/form-validation", component: FormValidation },
  { path: "/admin/form-advanced", component: FormAdvanced },
  { path: "/admin/form-mask", component: FormMask },
  { path: "/admin/form-repeater", component: FormRepeater },
  { path: "/admin/form-uploads", component: FormUpload },
  { path: "/admin/form-xeditable", component: FormXeditable },
  { path: "/admin/form-wizard", component: FormWizard },
  { path: "/admin/form-editors", component: FormEditor },

  //Charts
  { path: "/admin/charts-chartist", component: ChartistChart },
  { path: "/admin/charts-chartjs", component: ChartjsChart },
  { path: "/admin/apex-chart", component: ApexChart },
  { path: "/admin/charts-sparkline", component: SarklineChart },
  { path: "/admin/e-charts", component: EchartChart },

  //Tables
  { path: "/admin/tables-basic", component: TableBasic },
  { path: "/admin/tables-datatable", component: TableDatatable },
  { path: "/admin/tables-responsive", component: TableResponsive },
  { path: "/admin/tables-editable", component: TableEditable },

  //Icons
  { path: "/admin/icons-dripicons", component: IconDripicons },
  { path: "/admin/icons-fontawesome", component: IconFontAwesome },
  { path: "/admin/icons-ion", component: IconIon },
  { path: "/admin/icons-material", component: IconMaterial },
  { path: "/admin/icons-themify", component: IconThemify },
  { path: "/admin/icons-typicons", component: IconTypicons },

  // Maps
  { path: "/admin/maps-google", component: MapsGoogle },
  { path: "/admin/maps-vector", component: MapsVector },

  // Extra Pages
  { path: "/admin/pages-timeline", component: PagesTimeline },
  { path: "/admin/pages-invoice", component: PagesInvoice },
  { path: "/admin/pages-directory", component: PagesDirectory },
  { path: "/admin/pages-blank", component: PagesBlank },
  { path: "/admin/pages-pricing", component: PagesPricing },
  { path: "/admin/pages-gallery", component: PagesGallery },
  { path: "/admin/pages-faq", component: PagesFaq },

  { path: "/admin/dashboard", component: Dashboard },

  { path: "/admin", exact: true, component: () => <Redirect to="/admin/dashboard" /> }
];

const publicRoutes = [
  { path: "/admin/logout", component: Logout },
  { path: "/admin/login", component: Login },
  { path: "/admin/forget-password", component: ForgetPwd },
  { path: "/admin/pages-register", component: Register },

  // Extra Pages
  { path: "/admin/pages-login-2", component: PagesLogin2 },
  { path: "/admin/pages-register-2", component: PagesRegister2 },
  { path: "/admin/pages-recoverpw-2", component: PagesRecoverpw2 },
  { path: "/admin/pages-lock-screen-2", component: PagesLockScreen2 },

  { path: "/admin/pages-404", component: Pages404 },
  { path: "/admin/pages-500", component: Pages500 },
  { path: "/admin/pages-Maintenance", component: PagesMaintenance },
  { path: "/admin/pages-comingsoon", component: PagesComingsoon }
];

export { authProtectedRoutes, publicRoutes };
