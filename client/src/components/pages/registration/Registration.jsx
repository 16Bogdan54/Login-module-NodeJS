import React, {useEffect, useState} from 'react';
import {CustomForm} from "../../CustomForm/CustomForm";
import {Center} from "@chakra-ui/react";

export const Registration = () => {
    const [user, setUser] = useState(() => ({
        email: "",
        password: "",
    }))

    return (
        <Center>
            <CustomForm type="registration" user={user} setUser={setUser}/>
        </Center>
    );
};