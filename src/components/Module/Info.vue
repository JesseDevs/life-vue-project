<template>
	<module-info id="section-content">
		<Qleft class="qleft" />
		<h2>Give the gift of saving lives from opioid overdose</h2>
		<Qright class="qright" />
	</module-info>
</template>

<script setup></script>

<style lang="scss">
	module-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		justify-content: center;
		position: relative;
		padding-top: 50px;
		padding-bottom: 50px;
		min-height: 200px;

		margin: 0 auto;

		h2 {
			text-align: center;
			font-size: clamp(1rem, 0.2727rem + 3.6364vw, 3rem);

			margin: 0 auto;
			min-height: 150px;
			padding-left: 25px;
			padding-right: 25px;

			font-weight: 700;
			text-transform: uppercase;
			letter-spacing: 0.08em;
		}

		.qleft,
		.qright {
			font-size: 1.5em;
			position: absolute;
		}

		.qleft {
			align-self: flex-start;
			left: 0;
			top: 45px;
		}
		.qright {
			align-self: flex-end;
			right: 0;
			top: 45px;
		}
	}
</style>
