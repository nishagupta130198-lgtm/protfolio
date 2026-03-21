export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

        <div className="projects-grid">
            <div className="project-card">
            <h3>School ERP System</h3>
            <p className="project-tech">React JS • Node JS • MongoDB</p>
            <p className="project-desc">
                Web-based ERP system designed to simplify school operations
                including student data, fees, attendance and academic records.
            </p>

            <ul>
                <li>Student & class management</li>
                <li>Fees collection & reports</li>
                <li>Attendance tracking</li>
                <li>User-friendly admin dashboard</li>
            </ul>
            </div>

            <div className="project-card">
                <h3>School Contest Management System</h3>
                <p className="project-tech">PHP • JavaScript • Bootstrap • MySQL</p>

                <p className="project-desc">
                    Academic project developed for managing school-level contests,
                    including participant registration, scoring and result generation.
                </p>

                <ul>
                    <li>Participant registration & category management</li>
                    <li>Judge-based scoring system</li>
                    <li>Automatic result calculation</li>
                    <li>Admin dashboard for contest control</li>
                </ul>
            </div>

            <div className="project-card">
                <h3>Self Ordering Kiosk System</h3>
                <p className="project-tech">Angular • CodeIgniter (PHP) • MySQL</p>

                <p className="project-desc">
                    A self-service restaurant kiosk application that enables customers
                    to browse the menu and place orders independently, improving speed
                    and order accuracy.
                </p>

                <ul>
                    <li>Touch-optimized UI using Angular</li>
                    <li>Live menu & pricing management</li>
                    <li>Order creation & modification workflow</li>
                    <li>CodeIgniter-based REST APIs</li>
                    <li>MySQL database for order & menu data</li>
                </ul>
            </div>

            <div className="project-card">
                <h3>QR Menu Ordering System</h3>
                <p className="project-tech">Angular • CodeIgniter (PHP) • MySQL</p>

                <p className="project-desc">
                    QR-based ordering solution for dine-in restaurants where customers
                    scan a table QR code to view the menu and place orders directly
                    from their mobile phones.
                </p>

                <ul>
                    <li>Table-wise QR code ordering</li>
                    <li>Mobile-optimized digital menu</li>
                    <li>Real-time order placement</li>
                    <li>Kitchen & staff order dashboard</li>
                    <li>REST APIs with CodeIgniter</li>
                    <li>MySQL-based order & menu management</li>
                </ul>
            </div>

            <div className="project-card">
                <h3>BakeAhoy – Cake Management System</h3>
                <p className="project-tech">Core PHP • Bootstrap • MySQL</p>

                <p className="project-desc">
                    A bakery management system designed to handle cake listings,
                    custom orders and order tracking with a clean and responsive UI.
                </p>

                <ul>
                    <li>Cake & category management</li>
                    <li>Custom cake order handling</li>
                    <li>Order status tracking</li>
                    <li>Customer & order history</li>
                    <li>Responsive Bootstrap-based UI</li>
                </ul>
            </div>

            <div className="project-card">
                <h3>Feedback & Campaign System</h3>
                <p className="project-tech">PHP • JavaScript • MySQL</p>

                <p className="project-desc">
                    An automation system for running feedback and  campaigns
                    to improve customer engagement and follow-up efficiency.
                </p>

                <ul>
                    <li>Automated feedback collection campaigns</li>
                    <li>Scheduled reminder notifications</li>
                    <li>Customer segmentation & targeting</li>
                    <li>Campaign tracking & reporting</li>
                    <li>Admin dashboard for management</li>
                </ul>
            </div>
            
            <div className="project-card">
                <h3>Order Display System (ODS)</h3>
                <p className="project-tech">Angular • CodeIgniter (PHP) • MySQL</p>

                <p className="project-desc">
                    A live kitchen order tracking system that displays incoming
                    restaurant orders in real time to streamline food preparation
                    and reduce order delays.
                </p>

                <ul>
                    <li>Live order feed for kitchen screens</li>
                    <li>Order status workflow (New → Preparing → Ready)</li>
                    <li>Real-time updates using APIs</li>
                    <li>Kitchen-friendly UI built with Angular</li>
                    <li>POS & ordering system integration</li>
                </ul>
            </div>

            <div className="project-card">
                <h3>Rider Delivery Application</h3>
                <p className="project-tech">CodeIgniter (PHP) • MySQL</p>

                <p className="project-desc">
                    A delivery app designed for riders to manage assigned orders,
                    update delivery status and ensure real-time coordination
                    with restaurant and admin systems.
                </p>

                <ul>
                    <li>Rider authentication & order assignment</li>
                    <li>Live delivery status updates</li>
                    <li>Customer & delivery details view</li>
                    <li>Real-time sync with admin panel</li>
                    <li>REST APIs with CodeIgniter</li>
                </ul>
            </div>
            
            <div className="project-card">
                <h3>CRM System – Marketing & Customer Support</h3>
                <p className="project-tech">PHP • JavaScript • MySQL</p>

                <p className="project-desc">
                    A CRM solution built to manage targeted customer marketing,
                    track complaints and issues, and collect order-level feedback
                    for continuous service improvement.
                </p>

                <ul>
                    <li>Targeted customer segmentation</li>
                    <li>Marketing campaign management</li>
                    <li>Customer complaint & issue tracking</li>
                    <li>Order feedback collection & analysis</li>
                    <li>Status-based resolution workflow</li>
                </ul>
            </div>

            <div className="project-card">
                <h3>Online Food Ordering Website</h3>
                <p className="project-tech">
                    PHP • JavaScript • Bootstrap • MySQL<br/>
                    PhonePe • Razorpay
                </p>

                <p className="project-desc">
                    A restaurant-owned online ordering platform that enables customers
                    to place orders directly from the restaurant website with secure
                    online payment integration.
                </p>

                <ul>
                    <li>Direct online ordering (no third-party apps)</li>
                    <li>Cart & checkout flow</li>
                    <li>PhonePe & Razorpay payment integration</li>
                    <li>Order & payment status tracking</li>
                    <li>Admin dashboard for restaurant management</li>
                </ul>
            </div>

        </div>
        
    </section>
  );
}
