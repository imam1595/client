"use client";
import { authClient } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { Card } from '@heroui/react';
import { redirect } from "next/navigation";
import {  toast } from 'react-toastify';

import React from 'react';

const LoginPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        console.log(user);

        const {data, error} = await authClient.signIn.email({
            email: user.email,
            password: user.password,

        })

        if(data) {
            toast.success("you got it!");
            redirect('/')
        }

        if(error) {
            toast.error(error.message)
            console.log(error);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center mt-10 gap-5">

            <div className="text-center my-3">
                <h1 className="font-bold text-2xl">Create Account</h1>
            </div>

            <Card className="border">
                <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                    

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        // minLength={6}
                        name="password"
                        type="password"
                        validate={(value) => {
                        if (value.length < 6) {
                            return "Password must be at least 6 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[a-z]/.test(value)) {
                            return "Password must contain at least one lowercase";
                        }
                        return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 6 characters with 1 uppercase and 1 lowercase</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2">
                        <Button variant="primary" type="submit" className={'w-full'}>
                        <Check />
                        Create Account
                        </Button>
                        
                    </div>

                    <div className="text-center">
                        <h2>Or</h2>
                    </div>

                    
                    </Form>

                    <div className="flex gap-2">
                        <Button variant="primary" type="submit" className={'w-full'}>
                        <Check />
                        Register with Google
                        </Button>
                        
                    </div>
            </Card>
        </div>
    );
};

export default LoginPage;


//  https://i.ibb.co.com/8DrHQ64j/9169458e-1412-4c2c-911b-80ebf3e9c47d.jpg

//  https://i.ibb.co.com/WL4fdd4/Babar-Azam-2.webp
//  https://i.ibb.co.com/7x5HzrtH/Ellipse-1.png

//  https://i.ibb.co.com/HfffKqpM/Ellipse-2.png

//  https://i.ibb.co.com/tFSpwNJ/Ellipse-3.png

//  https://i.ibb.co.com/sph9kLhK/Ellipse-4.png