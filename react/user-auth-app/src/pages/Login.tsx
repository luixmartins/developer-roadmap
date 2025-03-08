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

const Login = () => {
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
                <Input className=''/>
                <p >Password</p>
                <Input />
            </CardContent>
            <CardFooter>
            <Button variant="outline" className='text-lg w-100'>Login</Button>

            </CardFooter>
        </Card>

    )
}

export default Login; 