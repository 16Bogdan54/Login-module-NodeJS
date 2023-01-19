import React, {useState} from 'react';
import {CustomForm} from "../../CustomForm/CustomForm";
import {Center} from "@chakra-ui/react";

export const Login = () => {
    const [user, setUser] = useState(() => ({
        email: "",
        password: "",
    }))

    return (
        <Center>
            <CustomForm type="login" user={user} setUser={setUser}/>
        </Center>
    );
};
