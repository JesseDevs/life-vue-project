<template>
	<footer class="site-footer small-voice">
		<inner-column>
			<footer-block>
				<footer-group>
					<p class="group-head">Navigation</p>
					<ul>
						<li>
							<a href="/">Home </a>
						</li>
						<li>
							<a href="/#mission">Mission </a>
						</li>

						<li>
							<a href="/team">Team </a>
						</li>
						<li>
							<a href="/#events">Events </a>
						</li>
						<li>
							<a href="/#gallery">Gallery </a>
						</li>
						<li>
							<a href="/#resources">Resources </a>
						</li>
						<li>
							<a href="/#contact">Contact </a>
						</li>
						<!-- <li>
							<a href="/faq">FAQ</a>
						</li> -->
					</ul>
				</footer-group>
				<footer-group>
					<p class="group-head">Community Resources</p>
					<ul>
						<li>
							<a href="https://www.tacoinc.org/" target="_blank">TACO</a>
						</li>
						<li>
							<a href="https://www.ocmecca.org/" target="_blank">MECCA</a>
						</li>
						<li>
							<a href="https://endoverdose.net/" target="_blank"
								>End Overdose</a
							>
						</li>
						<li>
							<a
								href="https://thepurposeofrecovery.org/index.html"
								target="_blank"
								>The Purpose of Recovery</a
							>
						</li>
						<li>
							<a href="https://www.clarematrix.org/" target="_blank"
								>Clare Matrix</a
							>
						</li>
						<li>
							<a href="https://www.impacthouse.com/" target="_blank"
								>IMPACT</a
							>
						</li>
						<li>
							<a href="https://didihirsch.org/" target="_blank"
								>Didi Hirsch</a
							>
						</li>
					</ul>
				</footer-group>
				<footer-group>
					<p class="group-head">Socials</p>
					<ul>
						<li>
							<a
								href="https://www.instagram.com/lifeofthepartyorg/"
								target="_blank"
								>Instagram <PathArrow
							/></a>
						</li>
					</ul>
				</footer-group>
				<footer-group>
					<p class="group-head">Join the Community</p>
					<ul>
						<li>
							<a :href="mailToHref" target="_blank">
								Help By Volunteering
								<PathArrow />
							</a>
						</li>
						<li>
							<a href="/team">
								Meet The Team
								<PathArrow />
							</a>
						</li>
						<li>
							<a
								href="https://www.zeffy.com/en-US/donation-form/9dd05842-7a29-4423-9102-3060efb0e3fa"
								target="_blank"
								class="donate-btn"
							>
								Donate<PathArrow />
							</a>
						</li>
					</ul>
				</footer-group>
				<foot-note>
					<p class="small-voice">© 2024 LIFE OF THE PARTY</p>
					<p class="small-voice">
						LIFE OF THE PARTY is a 501(c)(3) nonprofit organization.
					</p>
				</foot-note>
			</footer-block>
		</inner-column>
	</footer>
</template>

<script setup>
	const email = ref('contact@lifeoftheparty.org');

	const mailToHref = computed(() => {
		return `mailto:${email.value}?subject=Volunteer%20Opportunities%20-%20Life%20of%20The%20Party&body=Hello,%0D%0A%0D%0AI%20am%20interested%20in%20volunteering%20for%20your%20organization.%20Please%20provide%20more%20information%20on%20how%20I%20can%20help.%0D%0A%0D%0AThank%20you,%0D%0A[Your%20Name]`;
	});
</script>

<style lang="scss" scoped>
	footer {
		inner-column {
			padding-top: 2rem;
			padding-bottom: 2rem;
			height: 100%;
		}
		footer-group {
			display: flex;
			flex-direction: column;
			gap: 22px;
			width: 100%;
			.group-head {
				font-size: 14px;
				font-style: normal;
				font-weight: 500;
				line-height: 160%;
				color: var(--Text-Loud, var(--Base-White, #fff));
				letter-spacing: 0.2px;
			}
			ul {
				display: flex;
				flex-direction: column;
				gap: 18px;
				li a {
					display: inline-flex;
					gap: 8px;
					align-items: center;
					align-self: flex-start;
					font-size: 14px;
					font-style: normal;
					font-weight: 500;
					line-height: normal;
					color: var(--Text-Default, var(--grey-200));
					letter-spacing: 0.2px;
					transition: color 0.3s ease;

					&:hover {
						color: var(--Base-White, #fff);
						svg {
							transform: translate(1px, -1px);
						}
					}
				}
			}
		}
		footer-block {
			display: grid;
			grid-template-columns: repeat(2, minmax(104px, 1fr));
			width: 100%;
			position: relative;
			gap: 32px;
		}

		foot-note {
			// position: absolute;
			// left: 1.5rem;
			// bottom: 1.5rem;

			opacity: 0.9;
			display: block;
			grid-column: 1/-1;
			width: 100%;
			padding-top: 50px;

			p span {
				letter-spacing: 0.1em;
			}

			p + p {
				font-style: italic;
			}
		}
	}

	@media (min-width: 800px) {
		footer {
			footer-block {
				display: flex;
				flex-direction: column;
			}
			footer-group ul {
				flex-direction: row;
			}
		}
	}
</style>
