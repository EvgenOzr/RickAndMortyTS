import {RouteProps} from 'react-router-dom'
import CharacterPage from "../../../pages/CharacterPage/CharacterPage"
import EpisodePage from "../../../pages/EpisodePage/EpisodePage"
import MainPage from "../../../pages/MainPage/MainPage"
import LocationPage from '../../../pages/LocationPage/LocationPage'
import AllImagesPage from '../../../pages/AllImagesPage/AllImagesPage'

export enum AppRoutes {
    MAIN = 'main',
    CHARACTER = 'character',
    EPISODE = 'episode',
    Location = 'location',
    AllImages = 'allImages'
}

export const RoutePath: Record<AppRoutes,string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CHARACTER]: '/character',
    [AppRoutes.EPISODE]: '/episode',
    [AppRoutes.Location]: '/location',
    [AppRoutes.AllImages]: '/allImages'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.CHARACTER]: {
        path: RoutePath.character,
        element: <CharacterPage/>
    },
    [AppRoutes.EPISODE]: {
        path: RoutePath.episode,
        element: <EpisodePage/>
    },
    [AppRoutes.Location]: {
        path: RoutePath.location,
        element: <LocationPage/>
    },
    [AppRoutes.AllImages]: {
        path: RoutePath.allImages,
        element: <AllImagesPage/>
    }
}