import express, { Application, Request, Response } from 'express';
import userRoutes from './routes/UserRoutes';
import personalInfoRoutes from './routes/PersonalInfoRoutes';
import addressInfoRoutes from './routes/AddressInfoRoutes';
import addressExtraInfoRoutes from './routes/AddressExtraInfoRoutes';
import governmentInfoRoutes from './routes/GovernmentInfoRoutes';
import profileRoutes from './routes/ProfileRoutes';
import academicInfoRoutes from './routes/AcademicInfoRoutes';
import formalEducationRoutes from './routes/FormalEducationRoutes';
import scholarshipRoutes from './routes/ScholarshipInfoRoutes';
import bankAccountInfoRoutes from './routes/BankAccountInfoRoutes';
import skillRoutes from './routes/SkillRoutes';

const app: Application = express();
app.use(express.json())

app.use('/v1', userRoutes);
app.use('/v1', personalInfoRoutes);
app.use('/v1', addressInfoRoutes);
app.use('/v1', addressExtraInfoRoutes);
app.use('/v1', addressExtraInfoRoutes);
app.use('/v1', governmentInfoRoutes);
app.use('/v1', profileRoutes);
app.use('/v1', academicInfoRoutes);
app.use('/v1', formalEducationRoutes);
app.use('/v1', scholarshipRoutes);
app.use('/v1', bankAccountInfoRoutes);
app.use('/v1', skillRoutes);

export default app;