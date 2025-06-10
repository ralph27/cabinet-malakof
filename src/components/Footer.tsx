import {
  Linkedin,
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

const Footer = () => {
  return (
    <>
      <footer className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900"></div>
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60"
          fill-rule="evenodd"
          fill-opacity="0.03"
        ></div>

        <div className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="lg:col-span-2">
                <div className="flex items-center mb-6 group">
                  <div className="relative mr-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-teal-500/25 transition-all duration-300">
                      <div className="w-6 h-6 bg-white rounded-lg"></div>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent">
                      CABINET
                    </h3>
                    <p className="text-teal-300 font-medium tracking-wide">
                      MALAKOFF
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
                  Providing exceptional healthcare services with cutting-edge
                  technology and compassionate care. Your health and wellness
                  are our top priorities.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-6 relative">
                  Quick Links
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full"></div>
                </h4>
                <ul className="space-y-3">
                  {[
                    { name: 'Appointments', href: '#', featured: true },
                    { name: 'Our Treatments', href: '#' },
                    { name: 'Medical Services', href: '#' },
                    { name: 'About Our Team', href: '#' }
                  ].map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className={`group flex items-center transition-all duration-300 ${
                          link.featured
                            ? 'text-teal-300 hover:text-teal-200 font-medium'
                            : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 bg-current rounded-full mr-3 opacity-50 group-hover:opacity-100 transition-opacity"></span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-6 relative">
                  Get In Touch
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full"></div>
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 group">
                    <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                      <Phone className="w-4 h-4 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Call Us</p>
                      <a
                        href="tel:0145019231"
                        className="text-white hover:text-teal-300 transition-colors font-medium"
                      >
                        01 45 01 92 31
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                      <Mail className="w-4 h-4 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Email</p>
                      <a
                        href="mailto:secretariat.kaddouhlesage@gmail.com"
                        className="text-white hover:text-teal-300 transition-colors font-medium text-sm break-all"
                      >
                        secretariat.kaddouhlesage@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                      <MapPin className="w-4 h-4 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Visit Us</p>
                      <address className="text-white not-italic leading-relaxed">
                        145 Av. de Malakoff,
                        <br />
                        75116 Paris, France
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="w-16 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full"></div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-slate-400 text-sm">
                  © 2025 Cabinet Malakoff. All Rights Reserved.
                </p>
                <p className="text-slate-500 text-xs mt-1">
                  Crafted with care by{' '}
                  <span className="text-teal-400">Televopment</span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-slate-400 text-sm mr-2">Follow us:</span>
                {[
                  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { Icon: Facebook, href: '#', label: 'Facebook' },
                  { Icon: Instagram, href: '#', label: 'Instagram' }
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="group relative w-10 h-10 rounded-full overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-300 group-hover:scale-110"></div>
                    <div className="absolute inset-0.5 bg-slate-800 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-transparent">
                      <Icon className="w-4 h-4 text-teal-400 group-hover:text-white transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
