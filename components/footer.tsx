import { Command, Github, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
	return (
		<footer className="w-full py-12 mt-20">
			<div className="max-w-5xl mx-auto px-6">
				<div className="glass glass-hover rounded-xl p-8">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div className="space-y-4">
							<h3 className="font-medium text-lg text-primary flex gap-2 items-center"><Command />CryptoTrade</h3>
							<p className="text-sm text-muted-foreground">
								Empowering traders with advanced crypto trading solutions.
							</p>
							<div className="flex space-x-4">
								<Button variant="ghost" size="icon">
									<Twitter className="size-4" />
								</Button>
								<Button variant="ghost" size="icon">
									<Github className="size-4" />
								</Button>
							</div>
						</div>

						<div className="space-y-4">
							<h4 className="font-medium">Trading</h4>
							<ul className="space-y-2">
								<li>
									<Link
										href="#features"
										className="text-sm text-muted-foreground hover:text-primary transition-colors"
									>
										Markets
									</Link>
								</li>
								<li>
									<Link
										href="#pricing"
										className="text-sm text-muted-foreground hover:text-primary transition-colors"
									>
										Trading Fees
									</Link>
								</li>
							</ul>
						</div>

						<div className="space-y-4">
							<h4 className="font-medium">Resources</h4>
							<ul className="space-y-2">
								<li>
									<Link
										href="#"
										className="text-sm text-muted-foreground hover:text-primary transition-colors"
									>
										Trading Guide
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-sm text-muted-foreground hover:text-primary transition-colors"
									>
										Market Analysis
									</Link>
								</li>
							</ul>
						</div>

						<div className="space-y-4">
							<h4 className="font-medium">Legal</h4>
							<ul className="space-y-2">
								<li>
									<Link
										href="#"
										className="text-sm text-muted-foreground hover:text-primary transition-colors"
									>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-sm text-muted-foreground hover:text-primary transition-colors"
									>
										Terms of Service
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="mt-8 pt-8 border-t border-white/10">
						<p className="text-sm text-muted-foreground text-center">
							© {new Date().getFullYear()} CryptoTrade. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
