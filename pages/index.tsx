"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../redux/store";
import { loginSuccess } from "../redux/features/loginSlice";
export default function Home() {
	const [isLoading, setIsLoading] = useState<Boolean>(false);
	const dispatch = useAppDispatch();
	const loginSchema = Yup.object().shape({
		phone: Yup.string().required("Phone number is required"),
		password: Yup.string()
			.required("Password is required")
			.min(6, "Password is too short - should be 6 chars minimum"),
	});

	const formik = useFormik({
		initialValues: {
			phone: "",
			password: "",
		},
		validationSchema: loginSchema,
		onSubmit: (values, { resetForm }) => {
			setIsLoading(true);
			setTimeout(() => {
				dispatch(
					loginSuccess({
						phone: values.phone,
						password: values.password,
					})
				);
				toast.success("Successfully LoggedIn.");
				resetForm();
				setIsLoading(false);
			}, 1000);
		},
	});
	const { errors, values, touched, handleChange, handleSubmit } = formik;
	return (
		<section className="bg-primary_bg h-screen">
			<div className="container">
			<div className="wrapper">
				<div className="basis-7/12 md:block">
					<img src="/login_illustration.svg" alt="login_illustration" />
				</div>
				<div className="login-form">
					<h2 className="text-xl text-white mb-4">Login</h2>
					<p className="text-primary_text text-sm">
						Don’t have an account?{" "}
						<span
							className="text-primary cursor-pointer font-[500]"
							onClick={() => toast.error("Get started is not available")}
						>
							Get Started
						</span>
					</p>
					<form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-8">
						<div>
							<input
								name="phone"
								type="tel"
								placeholder="Phone number"
								className={`input ${errors.phone && touched.phone && "input-error"
									}`}
								onChange={handleChange}
								value={values.phone}
							/>
							{errors.phone && touched.phone ? (
								<p className="text-red-400 text-sm">{errors.phone}</p>
							) : null}
						</div>
						<div>
							<input
								name="password"
								type="password"
								className={`input ${errors.password && touched.password && "input-error"
									}`}
								placeholder="Password"
								onChange={handleChange}
								value={values.password}
							/>
							{errors.password && touched.password ? (
								<p className="text-red-400 text-sm"> {errors.password}</p>
							) : null}
						</div>
						<span
							className="forgot-password"
							onClick={() => toast.error("Forgot Password is not available")}
						>
							Forgot password?
						</span>
						<button type="submit" className="login-btn">
							{isLoading ? "Loading..." : "Login"}
						</button>
					</form>
				</div>
			</div>
			</div>
		</section>
	);
}
