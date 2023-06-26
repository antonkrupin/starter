import {
	DashboardOutlined,
	AppstoreAddOutlined,
	ShoppingCartOutlined,
	LayoutOutlined,
	ProfileOutlined,
	CompassOutlined,
	FileTextOutlined,
	MailOutlined,
	DesktopOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'


const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'dashboards-default',
      path: `${APP_PREFIX_PATH}/dashboards/default`,
      title: 'sidenav.dashboard.default',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const catalogNavTree = [{
	key: 'catalog',
	path: `${APP_PREFIX_PATH}/catalog`,
	title: 'sidenav.catalog',
	icon: ShoppingCartOutlined,
	breadcrumb: false,
	isGroupTitle: false,
	submenu: [
		{
			key: 'catalog-goods',
			path: `${APP_PREFIX_PATH}/catalog/goods`,
			title: 'sidenav.catalog.goods',
			icon: '',
			breadcrumb: false,
			submenu: [],
		},
		{
			key: 'catalog-categories',
			path: `${APP_PREFIX_PATH}/catalog/categories`,
			title: 'sidenav.catalog.categories',
			icon: '',
			breadcrumb: false,
			submenu: [],
		},
		{
			key: 'catalog-collections',
			path: `${APP_PREFIX_PATH}/catalog/collections`,
			title: 'sidenav.catalog.collections',
			breadcrumb: false,
			submenu: [],
		},
		{
			key: 'catalog-combo',
			path: `${APP_PREFIX_PATH}/catalog/combo`,
			title: 'sidenav.catalog.combo',
			breadcrumb: false,
			submenu: [],
		},
	]
}]

const ordersNavTree = [{
	key: 'orders',
	path: `${APP_PREFIX_PATH}/orders`,
	title: 'sidenav.orders',
	icon: AppstoreAddOutlined,
	breadcrumb: false,
	isGroupTitle: false,
	submenu: [],
}]

const clientsNavTree = [{
	key: 'clients',
	path: `${APP_PREFIX_PATH}/clients`,
	title: 'sidenav.clients',
	icon: AppstoreAddOutlined,
	breadcrumb: true,
	isGroupTitle: false,
	submenu: [
		{
			key: 'clients-list',
			path: `${APP_PREFIX_PATH}/clients/list`,
			title: 'sidenav.clients.clientsList',
			icon: '',
			breadcrumb: false,
			submenu: []
		},
		{
			key: 'clients-groups',
			path: `${APP_PREFIX_PATH}/clients/groups`,
			title: 'sidenav.clients.clientsGroups',
			icon: '',
			breadcrumb: false,
			submenu: []
		},
	]
}]

const bannersNavTree = [{
	key: 'banners',
	path: `${APP_PREFIX_PATH}/banners`,
	title: 'sidenav.banners',
	icon: LayoutOutlined,
	breadcrumb: false,
	submenu: [],
}]

const promocodesNavTree = [{
	key: 'promocodes',
	path: `${APP_PREFIX_PATH}/promocodes`,
	title: 'sidenav.promocodes',
	icon: ProfileOutlined,
	breadcrumb: false,
	submenu: [],
}]

const offlinePointsNavTree = [{
	key: 'offlinePoints',
	path: `${APP_PREFIX_PATH}/offlinePoints`,
	title: 'sidenav.offlinePoints',
	icon: CompassOutlined,
	breadcrumb: false,
	isGroupTitle: false,
	submenu: [
		{
			key: 'offlinePoints-address',
			path: `${APP_PREFIX_PATH}/offlinePoints/address`,
			title: 'sidenav.offlinePoints.address',
			icon: '',
			breadcrumb: false,
			submenu: []
		},
		{
			key: 'offlinePoints-geo',
			path: `${APP_PREFIX_PATH}/offlinePoints/geo`,
			title: 'sidenav.offlinePoints.geo',
			icon: '',
			breadcrumb: false,
			submenu: []
		},
	] 
}]

const staffNavTree = [{
	key: 'staff',
	path: `${APP_PREFIX_PATH}/staff`,
	title: 'sidenav.staff',
	icon: FileTextOutlined,
	breadcrumb: false,
	submenu: [],
}]

const maillistNavTree = [{
	key: 'maillist',
	path: `${APP_PREFIX_PATH}/maillist`,
	title: 'sidenav.maillist',
	icon: MailOutlined,
	breadcrumb: false,
	submenu: [],
}]

const mainNavTree = [{
  key: 'main',
  path: `${APP_PREFIX_PATH}/main`,
  title: 'sidenav.main',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'main-settings',
      path: `${APP_PREFIX_PATH}/main/settings`,
      title: 'sidenav.main.settings',
      icon: DesktopOutlined,
      breadcrumb: false,
      submenu: []
    },
		{
      key: 'main-mobileapp',
      path: `${APP_PREFIX_PATH}/main/mobileapp`,
      title: 'sidenav.main.mobileapp',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
		{
      key: 'main-logs',
      path: `${APP_PREFIX_PATH}/main/logs`,
      title: 'sidenav.main.logs',
      icon: ProfileOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree,
	...catalogNavTree,
	...ordersNavTree,
	...clientsNavTree,
	...bannersNavTree,
	...promocodesNavTree,
	...offlinePointsNavTree,
	...staffNavTree,
	...maillistNavTree,
	...mainNavTree,
]

export default navigationConfig;
