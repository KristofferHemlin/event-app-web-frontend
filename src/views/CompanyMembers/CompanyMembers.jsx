import React, {useState, useEffect} from 'react';
import './CompanyMembers.scss';

import UserList from '../../components/UserList/UserList';
import UserFilterBar from '../../components/UserFilterBar/UserFilterBar';
import BaseButton from '../../components/BaseButton/BaseButton';
import SectionPaneHeader from '../../components/SectionPaneHeader/SectionPaneHeader';
import { useStateValue } from '../../components/StateProvider/StateProvider';
import axios from 'axios';

const CompanyMembers = () => {

    const [{ userInfo }] = useStateValue();
    const [companyUserList, setCompanyUserList] = useState([]);
    const [currentListedMembers, setCurrentListedMembers] = useState([]);

    const fetchCompanyMembers = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/companies/${userInfo.company.id}/users`)
        .then(members => {
            setCompanyUserList(members.data);
            setCurrentListedMembers(members.data);
        })
        .catch(err => {
            console.log(err);
        }) 
    };

    useEffect(() => {
        console.log(userInfo);
        fetchCompanyMembers();
    }, []);

    const onFilterChange = (e) => {
        setCurrentListedMembers(companyUserList.filter(user => {
            return (`${user.firstName} ${user.lastName}`).toLowerCase().includes(e.target.value.toLowerCase());
        }))
        console.log(currentListedMembers);
    };

    return (
        <div className="company-employee-pane">
            <SectionPaneHeader
                title="Company Employees"
            >
                <BaseButton
                    size="md"
                    variant="primary"
                    buttonType="frame"
                    onClick={() => console.log('test')}
                >
                    Action
            </BaseButton>
            </SectionPaneHeader>

            <UserFilterBar 
                onChange={onFilterChange}
            />
            <UserList 
                users={currentListedMembers}
            />
        </div>
    )
};

export default CompanyMembers;