/* eslint @typescript-eslint/no-unused-vars: ["warn"] */
"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { AttendanceResponse } from '@/lib/type'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
const formSchema = z.object({
    data: z.string().min(1, "Name is required"),
  });
  type FormData = z.infer<typeof formSchema>;
const AttendenceTable = () => {
 const [attendence, setAttendence] = useState<AttendanceResponse|null>(null);
 const formMethods = useForm<FormData>({
  });
  const onSubmit = (data: FormData) => {
    setAttendence(JSON.parse(data.data));
    console.log("Form submitted:", data);
  };


if(!attendence)
    return <>
 <Form  {...formMethods}>
        <form className='space-y-2 h-full flex flex-col p-2 border mx-auto rounded-md'  onSubmit={formMethods.handleSubmit(onSubmit)}>
        <FormField
          name="data"
          render={({ field }) => (
            <FormItem className='flex-1 '>
              <FormLabel>Attendence Data</FormLabel>
              <FormControl>
                <Textarea  className='h-[500px]' {...field} />
              </FormControl>
              <FormMessage>{formMethods.formState.errors.data?.message}</FormMessage>
            </FormItem>
          )}
        />

        <Button type="submit">Format Data</Button>
        </form>
      </Form>

    </>
 if(attendence)
return (
<div className='w-full h-full flex flex-wrap gap-5  justify-center '>
  <CardTitle>Overall Percentage: {attendence.overall_percentage}%</CardTitle>
    {attendence.attendance_statement.map((subject)=>{
        const isShortage = subject.shortage!=='N'
  return  <Card key={subject.subject_id} className={cn(
      isShortage ? 'bg-gradient-to-b from-destructive/35 h-full  to-background': '',
      ' w-full flex-shrink-0  sm:max-w-[350px] md:max-w-[400px] lg:max-w-[420px]',
  )}>
        <CardHeader>
        
            <CardTitle>{subject.subject_name}</CardTitle>
            <CardDescription>{subject.faculty}</CardDescription>
            <div className="shortage flex items-center gap-1 w-fit shadow-md bg-background border rounded-full pr-4 pl-2 py-1">
                <div className={cn(
                    isShortage ? 'bg-destructive': 'bg-green-500',
                    'w-2 h-2 rounded-full animate-pulse'
                )}></div>
                <p className='text-sm font-semibold'>Attendence Shortage: {isShortage? 'Yes': 'No'}</p>
            </div>
        </CardHeader>
        <CardContent>
                <p className={cn(
                    'text-lg font-semibold',
                )}>Percentage:{subject.final_percentage}%</p>
                <p>Total Class Attended: {subject.attended}</p>
                <p>Total Class Missed: {subject.absent} ({subject.absent_dates})</p>
        </CardContent>
        <CardFooter className='border-t pt-2 flex flex-col'>
            <p className='flex items-center justify-between w-full'>
                <span>Last Attended</span>
                {subject.last_attended}
            </p>
            <p className='flex items-center justify-between w-full'>
                <span>Total Classes</span>
                {subject.conducted}
            </p>

        </CardFooter>
    </Card>
    }
    )}
</div>

  )
}

export default AttendenceTable