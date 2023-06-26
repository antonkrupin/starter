import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Card, Table, Tooltip, message, Button } from 'antd';
import { UserOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import InnerAppLayout from 'layouts/inner-app-layout';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import Loading from 'components/shared-components/Loading';

export class UserList extends Component {

	state = {
		users: [],
		loading: true,
		isClicked: false,
		isWatchAdditionalInfo: false,
		clickedProfile: {},
		userProfileVisible: false,
		selectedUser: null
	}
	
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(res => this.setState({ users: res, loading: false }));
	}

	deleteUser = userId => {
		this.setState({
			users: this.state.users.filter(item => item.id !== userId),
		})
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	showUserProfile = userInfo => {
		this.setState({
			userProfileVisible: true,
			selectedUser: userInfo
		});
	};
	
	closeUserProfile = () => {
		this.setState({
			userProfileVisible: false,
			selectedUser: null
    });
	}

	render() {
		const { users, userProfileVisible, selectedUser } = this.state;
		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus src={record.img} name={record.name} subTitle={record.email}/>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
  						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Username',
				dataIndex: 'username',
				sorter: {
					compare: (a, b) => a.username.length - b.username.length,
				},
			},
			{
				title: 'Website',
				dataIndex: 'website',
				sorter: {
					compare: (a, b) => a.website.length - b.website.length,
				},
			},
			{
				title: 'Phone',
				dataIndex: 'phone',
				sorter: {
					compare: (a, b) => a.phone.length - b.phone.length,
				},
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right d-flex justify-content-end">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {this.showUserProfile(elm)}} size="small"/>
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={()=> {this.deleteUser(elm.id)}} size="small"/>
						</Tooltip>
					</div>
				)
			}
		];
	
		const openProfile = (e) => {
			if (!e.target.closest('button')) {
				if (!e.target.classList.contains('ant-drawer-mask')) {
					const id = Number(e.target.closest('tr').dataset.rowKey);
					const target = this.state.users.filter((elem) => elem.id === id);
					localStorage.setItem('clickedProfile', JSON.stringify(target[0]));
					this.setState({ clickedProfile: target[0] });
					this.setState({ isClicked: true });
				}
			}
		}

		const url = '/app/clients/list'

		const MenuItem = ({icon, path, label}) => {
			return (
				<>
					{icon}
					<span>{label}</span>
					<Link to={`${url}/${path}`}/>
				</>
			)
		}

		const SettingOption = () => {		
			const currentpath = document.location.pathname;
		
			return (
				<Menu
					mode="inline"
					selectedKeys={[currentpath]}
					items={[
						{
							key: 'edit-profile',
							label: <MenuItem label="Edit Profile" icon={<UserOutlined />} path="edit-profile" />
						},
					]}
				/>
			);
		};
		
		return (
			<>
			{this.state.isClicked && (
				<>
					<InnerAppLayout sideContentWidth={320} sideContent={<SettingOption />} />
				</>
				)
			}
			{!this.state.isClicked && (
				<Card onClick={(e) => openProfile(e)} bodyStyle={{'padding': '0px'}}>
					<div className="table-responsive">
						{this.state.loading && <Loading />}
						{!this.state.loading && (
							<Table columns={tableColumns} dataSource={users} rowKey='id' />
						)}
					</div>
					<UserView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/>
				</Card>
			)}
			</>
		)
	}
}

export default UserList
