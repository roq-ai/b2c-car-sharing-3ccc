import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  status: yup.string().required(),
  car_id: yup.string().nullable(),
  guest_id: yup.string().nullable(),
});
