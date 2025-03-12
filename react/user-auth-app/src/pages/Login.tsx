import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input';
import { cn } from "@/lib/utils"
import { useState } from 'react';

import login from "@/api/login"; 

const Login = () => {
    const [data, setData] = useState({
        "email": "", 
        "password": ""
    })

    const handleClick = (key: string, value: string) => { 
        setData({ ...data, [key]: value }); 
    }

    const createLogin = async () => { 
        const response = await login(data)

        console.log(response)
    }
    return (
        <Card >
            <CardHeader>
                <CardTitle className={cn(
                    "font-medium text-xl"
                )}>
                    Welcome to my React APP!
                </CardTitle>
            </CardHeader>
            <CardContent className={cn(
                'text-lg p-5'
            )}>
                <p>Email</p>
                <Input className='' value={data.email} onChange={(e) => handleClick("email", e.target.value)} required/>
                <p >Password</p>
                <Input value={data.password} onChange={(e) => handleClick("password", e.target.value)} required/>
            </CardContent>
            <CardFooter>
            <Button variant="outline" className='text-lg w-100 cursor-pointer' onClick={createLogin}>Login</Button>

            </CardFooter>
        </Card>

    )
}

export default Login; 