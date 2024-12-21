import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Freshmark Foods</h3>
            <p className="text-sm">Expert ingredient solutions for diverse industries in South Africa.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li><Link href="/careers" className="hover:text-gray-300">Careers</Link></li>
              <li><Link href="/news" className="hover:text-gray-300">News and Insights</Link></li>
              <li><Link href="/become-supplier" className="hover:text-gray-300">Become a Supplier</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="hover:text-gray-300">Terms of Use</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p>Phone: +27 10 880 3920</p>
            <p>Email: info@freshmarkfoods.co.za</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/freshmarkfoods1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Facebook</a>
              <a href="https://www.instagram.com/freshmarkfoods2" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Instagram</a>
              <a href="https://www.linkedin.com/company/freshmarkfoods4" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">LinkedIn</a>
              <a href="https://twitter.com/freshmarkfoods3" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Freshmark Foods (Pty) Ltd. All rights reserved.</p>
          <p>Reg. 2016/361070/07</p>
        </div>
      </div>
    </footer>
  )
}

