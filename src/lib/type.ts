export type AttendanceStatement = {
    subject_id: number;
    subject_pattern: string;
    subject_code: string;
    subject_name: string;
    subject_type: string;
    faculty: string;
    conducted: string;
    attended: string;
    absent: string;
    exempt: string;
    percentage: number;
    excused: string;
    remedial: string;
    allowed: number;
    final_percentage: number;
    final_percentage_remedial: number;
    absent_dates: string | null;
    last_attended: string | null;
    shortage: string;
    transfer_subject: string;
    transfer_conducted_class: number;
  };
  
  export type AttendanceResponse = {
    attendance_statement: AttendanceStatement[];
    overall_percentage: number;
  };
  