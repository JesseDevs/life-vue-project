<template>
	<module-contact>
		<SectionTitle text="Contact Us" />
		<div id="section-content">
			<form
				action="https://formspree.io/f/xldrbwbe"
				method="POST"
				id="fs-frm"
				name="message-form"
			>
				<input name="subject" type="hidden" value="Need help with order" />
				<fieldset id="fs-frm-inputs">
					<label for="full-name">Full Name</label>
					<input
						type="text"
						name="name"
						id="full-name"
						placeholder="First and Last"
						required=""
					/>
					<label for="email-address">Email Address</label>
					<input
						type="email"
						name="_replyto"
						id="email-address"
						placeholder="Email"
						required=""
					/>
					<!-- <label for="telephone">Telephone Number (Optional)</label>
					<input
						type="tel"
						name="telephone"
						id="telephone"
						placeholder="(555) 555-5555"
					/> -->
					<label for="message">Message</label>
					<textarea
						rows="5"
						name="message"
						id="message"
						placeholder="Share your thoughts with us."
						required=""
					></textarea>
					<input
						type="hidden"
						name="_subject"
						id="email-subject"
						value="Contact Submission"
					/>
				</fieldset>
				<button class="general-btn" type="submit">
					Submit <Arrow class="arrow" />
				</button>
			</form>
			<DotGrid />
		</div>
	</module-contact>
</template>

<script setup></script>

<style lang="scss" scoped>
	module-contact {
		display: flex;
		flex-direction: column;

		width: 100%;
		position: relative;
		padding-bottom: 80px;

		gap: 20px;

		form {
			width: 100%;
			font-size: var(--text-sm);

			label {
				font-weight: 400;
			}
		}

		#fs-frm input,
		#fs-frm select,
		#fs-frm textarea,
		#fs-frm fieldset,
		#fs-frm optgroup,
		#fs-frm label,
		#fs-frm #card-element:disabled {
			font-family: inherit;
			font-size: inherit;
			color: inherit;
			border: none;
			border-radius: 0;
			display: block;
			width: 100%;
			padding: 0;
			margin: 0;
		}

		#fs-frm input,
		#fs-frm textarea {
			color: inherit;
			resize: none;
			color: var(--opposite-text-color);
		}

		#fs-frm label,
		#fs-frm legend,
		#fs-frm ::placeholder {
			font-size: var(--text-xs);
			margin-bottom: 0.5rem;
			padding-top: 0.2rem;
			display: flex;
			align-items: baseline;
		}

		/* border, padding, margin, width */
		#fs-frm input,
		#fs-frm select,
		#fs-frm textarea,
		#fs-frm #card-element {
			border: 1px solid rgba(0, 0, 0, 0.2);
			background-color: rgba(255, 255, 255, 0.9);
			padding: 0.75em 1rem;
			margin-bottom: 1.5rem;
		}
		#fs-frm input:focus,
		#fs-frm select:focus,
		#fs-frm textarea:focus {
			background-color: white;
			outline-style: solid;
			outline-width: thin;
			outline-color: gray;
			outline-offset: -1px;
		}
		#fs-frm [type='text'],
		#fs-frm [type='email'] {
			width: 100%;
		}
		#fs-frm [type='button'],
		#fs-frm [type='submit'],
		#fs-frm [type='reset'] {
			width: auto;
			cursor: pointer;
			appearance: button;
		}
		#fs-frm [type='button']:focus,
		#fs-frm [type='submit']:focus,
		#fs-frm [type='reset']:focus {
			outline: none;
		}
		#fs-frm [type='submit'],
		#fs-frm [type='reset'] {
			margin-bottom: 0;
		}
		#fs-frm select {
			text-transform: none;
		}

		#fs-frm [type='checkbox'] {
			appearance: checkbox;
			display: inline-block;
			width: auto;
			margin: 0 0.5em 0 0 !important;
		}

		#fs-frm [type='radio'] {
			appearance: radio;
		}

		#fs-frm fieldset.locale input[name='city'],
		#fs-frm fieldset.locale select[name='state'],
		#fs-frm fieldset.locale input[name='postal-code'] {
			display: inline;
		}
		#fs-frm fieldset.locale input[name='city'] {
			width: 52%;
		}
		#fs-frm fieldset.locale select[name='state'],
		#fs-frm fieldset.locale input[name='postal-code'] {
			width: 20%;
		}
		#fs-frm fieldset.locale input[name='city'],
		#fs-frm fieldset.locale select[name='state'] {
			margin-right: 3%;
		}
	}

	@media (min-width: 600px) {
		form {
			max-width: 70vmin;
		}
	}
</style>
