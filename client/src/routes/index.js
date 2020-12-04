import React from "react";
import { Redirect } from "react-router-dom";

// Pages Component

// Authentication related pages
import Login from "../components/Admin/Authentication/Login";
import Logout from "../components/Admin/Authentication/Logout";
import Register from "../components/Admin/Authentication/Register";
import ForgetPwd from "../components/Admin/Authentication/FogetPassword";

import Dashboard from "../components/Admin/Dashboard";

import WeeklySelection from "../components/Admin/Apps/WeeklySelection/index";

import EmailInbox from "../components/Admin/Apps/Email/inbox";
import EmailRead from "../components/Admin/Apps/Email/read";
import EmailCompose from "../components/Admin/Apps/Email/compose";

import Emailtemplatealert from "../components/Admin/Apps/EmailTemplate/email-template-alert";
import Emailtemplatebasic from "../components/Admin/Apps/EmailTemplate/email-template-basic";
import Emailtemplatebilling from "../components/Admin/Apps/EmailTemplate/email-template-billing";

// Profile
import Profile from '../components/Admin/Profile';

// Meals
import ViewMeals from '../components/Admin/Meals/ViewMeals';
import EditMeal from "../components/Admin/Meals/EditMeal";
import CreateDiet  from "../components/Admin/Plans/CreateDiet";

// Plans
import Plans from '../components/Admin/Plans/Plans';

// Users
import User from '../components/Admin/User';
import Review from '../components/Admin/Review';
import Tip from '../components/Admin/Tip';
import Comment from '../components/Admin/Comment';

// Publish
import Article from '../components/Admin/Article';
import CreateArticle from '../components/Admin/CreateArticle';
import EditArticle from '../components/Admin/EditArticle';
import Policy from '../components/Admin/Policy';

// Orders
import Order from '../components/Admin/Order';

import UiSweetAlert from "../components/Admin/UI/UiSweetAlert";
import UiAlerts from "../components/Admin/UI/Alerts";
import UiButtons from "../components/Admin/UI/Buttons";
import UiCards from "../components/Admin/UI/Cards";
import UiCarousel from "../components/Admin/UI/Carousel";
import UiDropdown from "../components/Admin/UI/Dropdown";
import UiGrid from "../components/Admin/UI/Grid";
import UiImages from "../components/Admin/UI/Images";
import UiLightbox from "../components/Admin/UI/Lightbox";
import UiModals from "../components/Admin/UI/Modals";
import UiRangeSlider from "../components/Admin/UI/RangeSlider";
import UiSessionTimeout from "../components/Admin/UI/SessionTimeout";
import Progressbar from "../components/Admin/UI/Progressbar";
import TabsAccordion from "../components/Admin/UI/TabsAccordion";
import Typography from "../components/Admin/UI/Typography";
import Video from "../components/Admin/UI/Video";
import General from "../components/Admin/UI/General";
import Colors from "../components/Admin/UI/Colors";
import Rating from "../components/Admin/UI/Rating";

// Form
import FormElement from "../components/Admin/Forms/FormElement";
import FormValidation from "../components/Admin/Forms/FormValidation";
import FormAdvanced from "../components/Admin/Forms/FormAdvanced";
import FormMask from "../components/Admin/Forms/FormMask";
import FormRepeater from "../components/Admin/Forms/FormRepeater";
import FormUpload from "../components/Admin/Forms/FormUpload";
import FormXeditable from "../components/Admin/Forms/FormXeditable";
import FormWizard from "../components/Admin/Forms/FormWizard";
import FormEditor from "../components/Admin/Forms/FormEditor";

// Charts
import ChartistChart from "../components/Admin/Charts/ChartistChart";
import ChartjsChart from "../components/Admin/Charts/ChartjsChart";
import ApexChart from "../components/Admin/Charts/ApexChart";
import SarklineChart from "../components/Admin/Charts/SarklineChart";
import EchartChart from "../components/Admin/Charts/EChart";

//Tables
import TableBasic from "../components/Admin/Tables/TableBasic";
import TableDatatable from "../components/Admin/Tables/TableDatatable";
import TableResponsive from "../components/Admin/Tables/TableResponsive";
import TableEditable from "../components/Admin/Tables/TableEditable";

//Maps
import IconDripicons from "../components/Admin/Icons/IconDripicons";
import IconFontAwesome from "../components/Admin/Icons/IconFontAwesome";
import IconIon from "../components/Admin/Icons/IconIon";
import IconMaterial from "../components/Admin/Icons/IconMaterial";
import IconThemify from "../components/Admin/Icons/IconThemify";
import IconTypicons from "../components/Admin/Icons/IconTypicons";

//Maps
import MapsVector from "../components/Admin/Maps/MapsVector";
import MapsGoogle from "../components/Admin/Maps/MapsGoogle";

// Extra Pages
import PagesLogin2 from "../components/Admin/ExtraPages/PagesLogin2";
import PagesRegister2 from "../components/Admin/ExtraPages/PagesRegister2";
import PagesRecoverpw2 from "../components/Admin/ExtraPages/PagesRecoverpw2";
import PagesLockScreen2 from "../components/Admin/ExtraPages/PagesLockScreen2";

// Extra Pages
import PagesTimeline from "../components/Admin/ExtraPages/PagesTimeline";
import PagesInvoice from "../components/Admin/ExtraPages/PagesInvoice";
import PagesDirectory from "../components/Admin/ExtraPages/PagesDirectory";
import PagesBlank from "../components/Admin/ExtraPages/PagesBlank";
import PagesPricing from "../components/Admin/ExtraPages/PagesPricing";
import PagesGallery from "../components/Admin/ExtraPages/PagesGallery";
import PagesFaq from "../components/Admin/ExtraPages/PagesFaq";
import Pages404 from "../components/Admin/ExtraPages/Pages404";
import Pages500 from "../components/Admin/ExtraPages/Pages500";
import PagesMaintenance from "../components/Admin/ExtraPages/PagesMaintenance";
import PagesComingsoon from "../components/Admin/ExtraPages/PagesComingsoon";
import CreateMeal from "../components/Admin/Meals/CreateMeal";

const authProtectedRoutes = [
  // profile
  { path: "/admin/profile", component: Profile },

  // WeeklySelection
  { path: "/admin/weekly-selection", component: WeeklySelection },

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
  // { path: "/admin/ui-alerts", component: UiAlerts },
  { path: "/admin/meals/create", component: CreateMeal },
  { path: "/admin/meals/:id", component: EditMeal},
  { path: "/admin/meals", component: ViewMeals },
  { path: "/admin/diet", component: CreateDiet },
  { path: "/admin/plans", component: Plans },
  { path: "/admin/users", component: User },
  { path: "/admin/articles/edit/:id", component: EditArticle },
  { path: "/admin/articles/create-article", component: CreateArticle },
  { path: "/admin/articles", component: Article },
  { path: "/admin/reviews", component: Review },
  { path: "/admin/tips", component: Tip },
  { path: "/admin/comments", component: Comment },
  { path: "/admin/policy-and-terms", component: Policy },
  { path: "/admin/orders", component: Order },

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
