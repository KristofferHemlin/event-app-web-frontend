import React from 'react';
import './CurrentUserInfo.scss';
import { useStateValue } from '../../components/StateProvider/StateProvider';
import { withRouter } from 'react-router-dom'

const CurrentUserInfo = withRouter(({ history }) => {

    const [{ userInfo }] = useStateValue();

    return (
        <div className="current-user-info-pane">
            <div 
                className="left-block"
                onClick={() => history.push('/my-profile')}
            >
                {userInfo ? (
                    <img src={`${process.env.REACT_APP_API_URL}/${userInfo.profileImageUrl}`} alt="" />
                ) : (
                    <div>???</div>
                )
                }
            </div>
            <div className="right-block">
                { userInfo ? (
                    <div>
                        <div className="name">{userInfo.firstName} {userInfo.lastName}</div>
                        <div className="role">Company Manager</div>
                    </div>
                ) : (
                    <div>asnjkda</div>
                )
            }

            </div>
        </div>
    );
});

export default CurrentUserInfo;