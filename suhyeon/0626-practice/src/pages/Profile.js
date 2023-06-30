import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const profileData = {
    suHyeon : {
        name : '황수현',
        id : 1,
        description : '리액트 강의를 배우고 있는 사람입니다.'
    },
    jiyoon : {
        name : '지윤',
        id : 2,
        description : '같은 팀원입니다.'
    }
}
const Profile = () => {
    const {username} = useParams();
    const navigate = useNavigate();
    const profile = profileData[username];
    console.log(profile);
    // console.log(username);
    // console.log(useParams());
    // console.log(useNavigate());

    return (
        <div>
            <h3>{profile.name}({username})이 무얷을 하는 사람일까요</h3>
            <p>{profile.description}</p>
            <div onClick={() => navigate(-1)}> 뒤로</div>
        </div>
    )
}

export default Profile;