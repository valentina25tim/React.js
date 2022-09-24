import React, { useContext } from 'react';
import { Route, Switch, Redirect} from "react-router-dom";
import { privateRoutes, publicRoutes } from './RouterPage';
import { AuthorizContext } from '../../../context';
import LoaderOfferList from '../../UI/loaders/loaderOffersList/LoaderOfferList';


const Router = () => {

    const {isAuthoriz, isLoading} = useContext(AuthorizContext);
    console.log(isAuthoriz)

    if (isLoading) 
    {
        return <LoaderOfferList/>
    }

    return (
    
    <div>
        {isAuthoriz
        
            ? <Switch>
                {privateRoutes.map(route => 
                <Route 
                    component={route.component} 
                    path={route.path}
                    exact={route.exact} 
                    key={route.path}
                />
            )}
            <Redirect to='/home'/>
            </Switch>

            :  <Switch>
                {publicRoutes.map(route => 
                <Route 
                    component={route.component} 
                    path={route.path}
                    exact={route.exact} 
                    key={route.path}
                />
            )}
            <Redirect to='/login'/>
            </Switch>
        }
    </div>
    )
}
export default Router;
