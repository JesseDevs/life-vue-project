<template>
	<footer class="site-footer small-voice">
		<inner-column>
			<footer-block>
				<div class="flex">
					<div class="quick-contact base-voice">
						<!-- <p>LA, California</p>
						<p>steadystudio6@gmail.com</p> -->
					</div>
				</div>
				<foot-note>
					<p class="small-voice">© 2024 LIFE of the PARTY</p>
				</foot-note>
			</footer-block>
		</inner-column>
	</footer>
</template>

<script setup></script>

<style lang="scss" scoped>
	.flex {
		display: flex;
		flex-direction: column;
		gap: 20px;

		.steady {
			flex-grow: 1;
			flex-shrink: 0;
		}

		div.quick-contact {
			p {
				font-size: 1.5rem;
				font-weight: 400;
			}
		}
	}
	footer {
		inner-column {
			padding-top: 2rem;
			padding-bottom: 2rem;
			height: 100%;
		}
		footer-block {
			display: flex;
			flex-direction: column;
			width: 100%;
			position: relative;
		}
		foot-note {
			// position: absolute;
			// left: 1.5rem;
			// bottom: 1.5rem;

			display: block;
			width: 100%;
			padding-top: 50px;
		}
	}
</style>
