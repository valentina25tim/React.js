import ErrorPage from "../../pages/errorPage/ErrorPage";
import LoginPage from "../../pages/loginPage/LoginPage";
import HomePage from "../../pages/pageHome/HomePage";
import OfferIdPage from "../../pages/pageOffers/OfferIdPage";
import OffersPage from "../../pages/pageOffers/OffersPage";

import PersonsPage from "../../pages/personPage/PersonsPage";
import RegistrationPage from "../../pages/registrationPage/RegistrationPage";


export const privateRoutes = [
    {path: '/home', component: HomePage, exact: true },
    {path: '/offers', component: OffersPage, exact: true },
    {path: '/offers/:id', component: OfferIdPage, exact: true },
    {path: '/search', component: ErrorPage, exact: true },
    {path: '/result', component: PersonsPage, exact: true },
    // {path: '/result/:id', component: PersonLinkPage, exact: true },
    {path: '/error', component: ErrorPage, exact: true },
    {path: '/candidates', component: ErrorPage, exact: true },
    {path: '/smsing', component: ErrorPage, exact: true },
]

export const publicRoutes = [
    {path: '/login', component: LoginPage, exact: true },
    {path: '/registration', component: RegistrationPage, exact: true },
]