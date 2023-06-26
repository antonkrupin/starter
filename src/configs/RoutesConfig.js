import React from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig'

export const publicRoutes = [
    {
        key: 'login',
        path: `${AUTH_PREFIX_PATH}/login`,
        component: React.lazy(() => import('views/auth-views/authentication/login')),
    },
    {
        key: 'register',
        path: `${AUTH_PREFIX_PATH}/register`,
        component: React.lazy(() => import('views/auth-views/authentication/register')),
    },
    {
        key: 'forgot-password',
        path: `${AUTH_PREFIX_PATH}/forgot-password`,
        component: React.lazy(() => import('views/auth-views/authentication/forgot-password')),
    }
]

export const protectedRoutes = [
    {
        key: 'dashboard.default',
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        component: React.lazy(() => import('views/app-views/dashboards/default')),
    },
		{
			key: 'clients',
			path: `${APP_PREFIX_PATH}/clients`,
			component: React.lazy(() => import('views/app-views/clients')),
		},
		{
				key: 'clients.list',
				path: `${APP_PREFIX_PATH}/clients/list/*`,
				component: React.lazy(() => import('views/app-views/clients/list')),
		},
		{
			key: 'clients.groups',
			path: `${APP_PREFIX_PATH}/clients/groups/*`,
			component: React.lazy(() => import('views/app-views/clients/groups')),
		},
		{
			key: 'clients.edit-profile',
			path: `${APP_PREFIX_PATH}/clients/list/edit-profile`,
			component: React.lazy(() => import('views/app-views/clients/edit-profile')),
		},
		{
			key: 'catalog',
			path: `${APP_PREFIX_PATH}/catalog`,
			component: React.lazy(() => import('views/app-views/catalog')),
		},
		{
			key: 'catalog',
			path: `${APP_PREFIX_PATH}/catalog/categories`,
			component: React.lazy(() => import('views/app-views/catalog/categories')),
		},
		{
			key: 'catalog',
			path: `${APP_PREFIX_PATH}/catalog/collections`,
			component: React.lazy(() => import('views/app-views/catalog/collections')),
		},
		{
			key: 'catalog',
			path: `${APP_PREFIX_PATH}/catalog/combo`,
			component: React.lazy(() => import('views/app-views/catalog/combo')),
		},
		{
			key: 'catalog',
			path: `${APP_PREFIX_PATH}/catalog/goods`,
			component: React.lazy(() => import('views/app-views/catalog/goods')),
		},
		{
			key: 'orders',
			path: `${APP_PREFIX_PATH}/orders`,
			component: React.lazy(() => import('views/app-views/orders')),
		},
		{
			key: 'banners',
			path: `${APP_PREFIX_PATH}/banners`,
			component: React.lazy(() => import('views/app-views/banners')),
		},
		{
			key: 'promocodes',
			path: `${APP_PREFIX_PATH}/promocodes`,
			component: React.lazy(() => import('views/app-views/promocodes')),
		},
		{
			key: 'offlinePoints',
			path: `${APP_PREFIX_PATH}/offlinePoints`,
			component: React.lazy(() => import('views/app-views/offlinePoints')),
		},
		{
			key: 'offlinePoints',
			path: `${APP_PREFIX_PATH}/offlinePoints/address`,
			component: React.lazy(() => import('views/app-views/offlinePoints/address')),
		},
		{
			key: 'offlinePoints',
			path: `${APP_PREFIX_PATH}/offlinePoints/geo`,
			component: React.lazy(() => import('views/app-views/offlinePoints/geo')),
		},
		{
			key: 'staff',
			path: `${APP_PREFIX_PATH}/staff`,
			component: React.lazy(() => import('views/app-views/staff')),
		},
		{
			key: 'maillist',
			path: `${APP_PREFIX_PATH}/maillist`,
			component: React.lazy(() => import('views/app-views/maillist')),
		},
		{
			key: 'main.settings',
			path: `${APP_PREFIX_PATH}/main/settings`,
			component: React.lazy(() => import('views/app-views/main/settings')),
		},
		{
			key: 'main.mobileapp',
			path: `${APP_PREFIX_PATH}/main/mobileapp`,
			component: React.lazy(() => import('views/app-views/main/mobileapp')),
		},
		{
			key: 'main.logs',
			path: `${APP_PREFIX_PATH}/main/logs`,
			component: React.lazy(() => import('views/app-views/main/logs')),
		},
]