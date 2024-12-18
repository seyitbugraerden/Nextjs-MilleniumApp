
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function PageStyleGuide() {

	return (
		<>

			<Layout >

				<section className="section-page-header py-10 fix position-relative">
					<div className="container position-relative z-1">
						<div className="text-start">
							<h3>Style Guide</h3>
							<div className="d-flex">
								<Link href="#">
									<p className="mb-0 text-900">Home</p>
								</Link>
								<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
									<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p className="text-primary mb-0">Style Guide</p>
							</div>
						</div>
					</div>
					<img className="position-absolute bottom-0 start-0 end-0 top-0 z-0" src="/assets/imgs/page-header/bg-line.png" alt="infinia" />
					<div className="bouncing-blobs-container">
						<div className="bouncing-blobs-glass" />
						<div className="bouncing-blobs">
							<div className="position-absolute top-0 start-0 translate-middle-y bouncing-blob--green" />
							<div className="position-absolute top-0 end-0 bouncing-blob--primary" />
						</div>
					</div>
				</section>
				{/* Style Guide */}
				<section className="section-comming-soon section-padding">
					<div className="container">
						<h3 className="ds-3 pb-5">Color palette</h3>
						<div className="d-flex flex-wrap align-items-center gap-3">
							<div className="text-center">
								<div className="bg-primary px-8 py-7 rounded-4" />
								<p className="text-900 mt-3">Primary</p>
							</div>
							<div className="text-center">
								<div className="bg-primary-light px-8 py-7 rounded-4" />
								<p className="text-900 mt-3">Primary Light</p>
							</div>
							<div className="text-center">
								<div className="bg-primary-soft px-8 py-7 rounded-4" />
								<p className="text-900 mt-3">Primary Soft</p>
							</div>
							<div className="text-center">
								<div className="bg-primary-dark px-8 py-7 rounded-4" />
								<p className="text-900 mt-3">Primary Dark</p>
							</div>
							<div className="text-center">
								<div className="bg-secondary px-8 py-7 rounded-4" />
								<p className="text-900 mt-3">Secondary</p>
							</div>
						</div>
						<div className="d-flex flex-wrap align-items-center gap-3 mt-8">
							<div className="text-center">
								<div className="bg-success px-8 py-7 rounded-4" />
								<p className="text-900 mt-3">Success</p>
							</div>
							<div className="text-center">
								<div className="bg-info px-8 py-7 rounded-4" />
								<p className="text-900 mt-3">Info</p>
							</div>
							<div className="text-center">
								<div className="bg-warning px-8 py-7 rounded-4" />
								<p className="text-900 mt-3">Warning</p>
							</div>
							<div className="text-center">
								<div className="bg-danger px-8 py-7 rounded-4" />
								<p className="text-900 mt-3">Danger</p>
							</div>
							<div className="text-center">
								<div className="bg-muted px-8 py-7 rounded-4" />
								<p className="text-900 mt-3">Muted</p>
							</div>
							<div className="text-center">
								<div className="bg-dark px-8 py-7 rounded-4" />
								<p className="text-900 mt-3">Dark</p>
							</div>
						</div>
						<div className="d-flex flex-wrap align-items-center gap-3 mt-8">
							<div className="text-center">
								<div className="bg-neutral-100 px-8 py-7 rounded-4" />
								<p className="text-900 mt-3">neutral-100</p>
							</div>
							<div className="text-center">
								<div className="bg-neutral-200 px-8 py-7 rounded-4" />
								<p className="text-900 mt-3">neutral-200</p>
							</div>
							<div className="text-center">
								<div className="bg-neutral-300 px-8 py-7 rounded-4" />
								<p className="text-900 mt-3">neutral-300</p>
							</div>
							<div className="text-center">
								<div className="bg-neutral-400 px-8 py-7 rounded-4" />
								<p className="text-900 mt-3">neutral-400</p>
							</div>
							<div className="text-center">
								<div className="bg-neutral-500 px-8 py-7 rounded-4" />
								<p className="text-900 mt-3">neutral-500</p>
							</div>
							<div className="text-center">
								<div className="bg-neutral-600 px-8 py-7 rounded-4" />
								<p className="text-900 mt-3">neutral-600</p>
							</div>
							<div className="text-center">
								<div className="bg-neutral-700 px-8 py-7 rounded-4" />
								<p className="text-900 mt-3">neutral-700</p>
							</div>
							<div className="text-center">
								<div className="bg-neutral-800 px-8 py-7 rounded-4" />
								<p className="text-900 mt-3">neutral-800</p>
							</div>
							<div className="text-center">
								<div className="bg-neutral-900 px-8 py-7 rounded-4" />
								<p className="text-900 mt-3">neutral-900</p>
							</div>
						</div>
						<h3 className="ds-3 mb-5 mt-8 pt-8 border-top">Typhography</h3>
						<div className="table-responsive wow img-custom-anim-top" style={{ visibility: 'visible', animationName: 'img-anim-top' }}>
							<table className="table table-borderless align-bottom table-white">
								<thead>
									<tr>
										<th scope="col" />
										<th scope="col">
											<span className="h6">Font Family</span>
										</th>
										<th scope="col">
											<span className="h6">Font weight</span>
										</th>
										<th scope="col">
											<span className="h6">Font size</span>
										</th>
										<th scope="col">
											<span className="h6">Line height</span>
										</th>
									</tr>
								</thead>
								<tbody className="table-group-divider mt-5">
									<tr className="border-bottom">
										<th scope="row">
											<span className="ds-1 my-2">Display 1</span>
										</th>
										<td>
											<p className="text-900">Satoshi</p>
										</td>
										<td>
											<p className="text-900">Bold</p>
										</td>
										<td>
											<p className="text-900">80px</p>
										</td>
										<td>
											<p className="text-900">120%</p>
										</td>
									</tr>
									<tr className="border-bottom">
										<th scope="row">
											<span className="ds-2">Display 2</span>
										</th>
										<td>
											<p className="text-900">Satoshi</p>
										</td>
										<td>
											<p className="text-900">Bold</p>
										</td>
										<td>
											<p className="text-900">72px</p>
										</td>
										<td>
											<p className="text-900">120%</p>
										</td>
									</tr>
									<tr className="border-bottom">
										<th scope="row">
											<span className="ds-3">Display 3</span>
										</th>
										<td>
											<p className="text-900">Satoshi</p>
										</td>
										<td>
											<p className="text-900">Bold</p>
										</td>
										<td>
											<p className="text-900">64px</p>
										</td>
										<td>
											<p className="text-900">120%</p>
										</td>
									</tr>
									<tr className="border-bottom">
										<th scope="row">
											<span className="ds-4">Display 4</span>
										</th>
										<td>
											<p className="text-900">Satoshi</p>
										</td>
										<td>
											<p className="text-900">Bold</p>
										</td>
										<td>
											<p className="text-900">56px</p>
										</td>
										<td>
											<p className="text-900">120%</p>
										</td>
									</tr>
									<tr className="border-bottom">
										<th scope="row">
											<span className="ds-5">Display 5</span>
										</th>
										<td>
											<p className="text-900">Satoshi</p>
										</td>
										<td>
											<p className="text-900">Bold</p>
										</td>
										<td>
											<p className="text-900">48px</p>
										</td>
										<td>
											<p className="text-900">120%</p>
										</td>
									</tr>
									<tr className="border-bottom">
										<th scope="row">
											<span className="ds-6">Display 6</span>
										</th>
										<td>
											<p className="text-900">Satoshi</p>
										</td>
										<td>
											<p className="text-900">Bold</p>
										</td>
										<td>
											<p className="text-900">40px</p>
										</td>
										<td>
											<p className="text-900">120%</p>
										</td>
									</tr>
									<tr className="border-bottom">
										<th scope="row">
											<span className="h1">Heading 1</span>
										</th>
										<td>
											<p className="text-900">Satoshi</p>
										</td>
										<td>
											<p className="text-900">Black</p>
										</td>
										<td>
											<p className="text-900">60px</p>
										</td>
										<td>
											<p className="text-900">120%</p>
										</td>
									</tr>
									<tr className="border-bottom">
										<th scope="row">
											<span className="h2">Heading 2</span>
										</th>
										<td>
											<p className="text-900">Satoshi</p>
										</td>
										<td>
											<p className="text-900">Black</p>
										</td>
										<td>
											<p className="text-900">48px</p>
										</td>
										<td>
											<p className="text-900">120%</p>
										</td>
									</tr>
									<tr className="border-bottom">
										<th scope="row">
											<span className="h3">Heading 3</span>
										</th>
										<td>
											<p className="text-900">Satoshi</p>
										</td>
										<td>
											<p className="text-900">Bold</p>
										</td>
										<td>
											<p className="text-900">38px</p>
										</td>
										<td>
											<p className="text-900">120%</p>
										</td>
									</tr>
									<tr className="border-bottom">
										<th scope="row">
											<span className="h4">Heading 4</span>
										</th>
										<td>
											<p className="text-900">Satoshi</p>
										</td>
										<td>
											<p className="text-900">Bold</p>
										</td>
										<td>
											<p className="text-900">31px</p>
										</td>
										<td>
											<p className="text-900">120%</p>
										</td>
									</tr>
									<tr className="border-bottom">
										<th scope="row">
											<span className="h5">Heading 5</span>
										</th>
										<td>
											<p className="text-900">Satoshi</p>
										</td>
										<td>
											<p className="text-900">Bold</p>
										</td>
										<td>
											<p className="text-900">25px</p>
										</td>
										<td>
											<p className="text-900">120%</p>
										</td>
									</tr>
									<tr className="border-bottom">
										<th scope="row">
											<span className="h6">Heading 6</span>
										</th>
										<td>
											<p className="text-900">Satoshi</p>
										</td>
										<td>
											<p className="text-900">Bold</p>
										</td>
										<td>
											<p className="text-900">20px</p>
										</td>
										<td>
											<p className="text-900">120%</p>
										</td>
									</tr>
									<tr className="border-bottom">
										<th scope="row">
											<p className="fs-1 text-900">fs-1 Lorem ipsum dolor</p>
										</th>
										<td>
											<p className="text-900">Satoshi</p>
										</td>
										<td>
											<p className="text-900">Medium</p>
										</td>
										<td>
											<p className="text-900">40px</p>
										</td>
										<td>
											<p className="text-900">150%</p>
										</td>
									</tr>
									<tr className="border-bottom">
										<th scope="row">
											<p className="fs-2 text-900">fs-2 Lorem ipsum dolor</p>
										</th>
										<td>
											<p className="text-900">Satoshi</p>
										</td>
										<td>
											<p className="text-900">Medium</p>
										</td>
										<td>
											<p className="text-900">32px</p>
										</td>
										<td>
											<p className="text-900">150%</p>
										</td>
									</tr>
									<tr className="border-bottom">
										<th scope="row">
											<p className="fs-3 text-900">fs-3 Lorem ipsum dolor</p>
										</th>
										<td>
											<p className="text-900">Satoshi</p>
										</td>
										<td>
											<p className="text-900">Medium</p>
										</td>
										<td>
											<p className="text-900">28px</p>
										</td>
										<td>
											<p className="text-900">150%</p>
										</td>
									</tr>
									<tr className="border-bottom">
										<th scope="row">
											<p className="fs-4 text-900">fs-4 Lorem ipsum dolor</p>
										</th>
										<td>
											<p className="text-900">Satoshi</p>
										</td>
										<td>
											<p className="text-900">Medium</p>
										</td>
										<td>
											<p className="text-900">24px</p>
										</td>
										<td>
											<p className="text-900">150%</p>
										</td>
									</tr>
									<tr className="border-bottom">
										<th scope="row">
											<p className="fs-5 text-900">fs-5 Lorem ipsum dolor</p>
										</th>
										<td>
											<p className="text-900">Satoshi</p>
										</td>
										<td>
											<p className="text-900">Medium</p>
										</td>
										<td>
											<p className="text-900">20px</p>
										</td>
										<td>
											<p className="text-900">150%</p>
										</td>
									</tr>
									<tr className="border-bottom">
										<th scope="row">
											<p className="fs-6 text-900">fs-6 Lorem ipsum dolor</p>
										</th>
										<td>
											<p className="text-900">Satoshi</p>
										</td>
										<td>
											<p className="text-900">Medium</p>
										</td>
										<td>
											<p className="text-900">16px</p>
										</td>
										<td>
											<p className="text-900">150%</p>
										</td>
									</tr>
									<tr className="border-bottom">
										<th scope="row">
											<p className="fs-7 text-900">fs-7 Lorem ipsum dolor</p>
										</th>
										<td>
											<p className="text-900">Satoshi</p>
										</td>
										<td>
											<p className="text-900">Medium</p>
										</td>
										<td>
											<p className="text-900">14px</p>
										</td>
										<td>
											<p className="text-900">150%</p>
										</td>
									</tr>
									<tr className="border-bottom">
										<th scope="row">
											<p className="fs-8 text-900">fs-8 Lorem ipsum dolor</p>
										</th>
										<td>
											<p className="text-900">Satoshi</p>
										</td>
										<td>
											<p className="text-900">Medium</p>
										</td>
										<td>
											<p className="text-900">12px</p>
										</td>
										<td>
											<p className="text-900">120%</p>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</section>

			</Layout>
		</>
	)
}