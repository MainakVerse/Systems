'use client'

import { useState, useMemo } from 'react'
import {
  Building2, Calendar, FileText, ShoppingCart, MessageSquare, Brain,
  ChevronLeft, ChevronRight, Users, BarChart3, Globe,
  Stethoscope, Truck, Package, FolderOpen, Shield,
  CreditCard, Megaphone, Mail, Video, Phone,
  ClipboardList, Database, TrendingUp, Star,
  Car, Plane, Music, Dumbbell, Scissors,
  Scale, Server, Clock, BookOpen, Lock,
  Tag, PieChart, Activity, Target, Ticket, Receipt,
  Warehouse, Store, Network, MapPin, Bell,
  GraduationCap, Leaf, Cpu, Bot, AlertTriangle,
  Heart, Home, Utensils, Factory, LayoutDashboard,
  PackageOpen, Users2, MessageCircle, LineChart,
  Settings2, Layers, Eye,
} from 'lucide-react'

import { FooterSection } from '@/components/sections/footer-section';
import { cn } from '@/lib/utils'

type Category = 'Management' | 'Booking' | 'Record' | 'Commercial' | 'Communication' | 'Intelligence'

interface SystemItem {
  id: number
  name: string
  description: string
  category: Category
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ElementType<any>
}

const CATEGORY_CONFIG: Record<Category, { badge: string; iconColor: string; iconBg: string }> = {
  Management:    { badge: 'bg-blue-100 text-blue-700',   iconColor: 'text-blue-500',   iconBg: 'bg-blue-50'   },
  Booking:       { badge: 'bg-pink-100 text-pink-700',   iconColor: 'text-pink-500',   iconBg: 'bg-pink-50'   },
  Record:        { badge: 'bg-violet-100 text-violet-700', iconColor: 'text-violet-500', iconBg: 'bg-violet-50' },
  Commercial:    { badge: 'bg-orange-100 text-orange-700', iconColor: 'text-orange-500', iconBg: 'bg-orange-50' },
  Communication: { badge: 'bg-teal-100 text-teal-700',   iconColor: 'text-teal-500',   iconBg: 'bg-teal-50'   },
  Intelligence:  { badge: 'bg-green-100 text-green-700', iconColor: 'text-green-500',  iconBg: 'bg-green-50'  },
}

const HEADER_ICONS: { icon: React.ElementType<{ className?: string }>; label: string }[] = [
  { icon: Users,        label: 'Management'    },
  { icon: Calendar,     label: 'Booking'       },
  { icon: Globe,        label: 'Record'        },
  { icon: BarChart3,    label: 'Commercial'    },
  { icon: MessageSquare, label: 'Communication' },
  { icon: Brain,        label: 'Intelligence'  },
]

const SYSTEMS: SystemItem[] = [
  // ── Management (17) ──────────────────────────────────────────────────────────
  { id:  1, name: 'Hospital Management',    description: 'Streamline clinical and administrative healthcare operations.',            category: 'Management',    icon: Stethoscope    },
  { id:  2, name: 'Inventory Control',      description: 'Real-time stock tracking and supply chain optimization.',                  category: 'Management',    icon: Package        },
  { id:  3, name: 'Restaurant Management',  description: 'Complete food service operations and kitchen coordination.',               category: 'Management',    icon: Utensils       },
  { id:  4, name: 'School Management',      description: 'Academic administration, timetables, and student oversight.',             category: 'Management',    icon: GraduationCap  },
  { id:  5, name: 'Hotel Management',       description: 'Property operations, housekeeping, and guest experience.',                category: 'Management',    icon: Building2      },
  { id:  6, name: 'HR Management',          description: 'Workforce planning, payroll, and employee lifecycle management.',         category: 'Management',    icon: Users          },
  { id:  7, name: 'Fleet Management',       description: 'Vehicle tracking, maintenance scheduling, and driver management.',        category: 'Management',    icon: Truck          },
  { id:  8, name: 'Warehouse Management',   description: 'Storage optimization, picking, and dispatch coordination.',              category: 'Management',    icon: Warehouse      },
  { id:  9, name: 'Project Management',     description: 'Task tracking, team collaboration, and milestone planning.',             category: 'Management',    icon: LayoutDashboard},
  { id: 10, name: 'Construction Management',description: 'Site supervision, resource allocation, and progress tracking.',          category: 'Management',    icon: Factory        },
  { id: 11, name: 'Farm Management',        description: 'Crop planning, livestock tracking, and yield analytics.',                category: 'Management',    icon: Leaf           },
  { id: 12, name: 'Gym Management',         description: 'Member enrollment, class scheduling, and facility usage.',               category: 'Management',    icon: Dumbbell       },
  { id: 13, name: 'Salon Management',       description: 'Appointment booking, staff scheduling, and client records.',             category: 'Management',    icon: Scissors       },
  { id: 14, name: 'Event Management',       description: 'End-to-end event planning, ticketing, and logistics.',                   category: 'Management',    icon: Star           },
  { id: 15, name: 'Legal Case Management',  description: 'Case tracking, document handling, and client billing.',                  category: 'Management',    icon: Scale          },
  { id: 16, name: 'IT Asset Management',    description: 'Hardware, software, and infrastructure lifecycle tracking.',             category: 'Management',    icon: Server         },
  { id: 17, name: 'Property Management',    description: 'Tenant relations, maintenance requests, and rent collection.',           category: 'Management',    icon: Home           },

  // ── Booking (17) ─────────────────────────────────────────────────────────────
  { id: 18, name: 'Booking Engine',         description: 'End-to-end reservation management for properties and services.',         category: 'Booking',       icon: Calendar       },
  { id: 19, name: 'Appointment Scheduler',  description: 'Smart scheduling with automated reminders and conflict resolution.',     category: 'Booking',       icon: Clock          },
  { id: 20, name: 'Room Reservation',       description: 'Hospitality room bookings with live availability calendars.',            category: 'Booking',       icon: Home           },
  { id: 21, name: 'Flight Booking',         description: 'Airline ticket search, booking, and itinerary management.',              category: 'Booking',       icon: Plane          },
  { id: 22, name: 'Car Rental',             description: 'Vehicle reservation, pickup/drop-off, and fleet availability.',          category: 'Booking',       icon: Car            },
  { id: 23, name: 'Restaurant Reservation', description: 'Table management, waitlists, and pre-order capabilities.',               category: 'Booking',       icon: Utensils       },
  { id: 24, name: 'Class Booking',          description: 'Educational and fitness class enrollment with waitlists.',               category: 'Booking',       icon: BookOpen       },
  { id: 25, name: 'Event Ticketing',        description: 'Ticket sales, seat selection, and attendee management.',                 category: 'Booking',       icon: Ticket         },
  { id: 26, name: 'Spa Booking',            description: 'Wellness service reservations with therapist matching.',                 category: 'Booking',       icon: Scissors       },
  { id: 27, name: 'Court Booking',          description: 'Sports court and facility reservations with usage tracking.',            category: 'Booking',       icon: Activity       },
  { id: 28, name: 'Equipment Rental',       description: 'Tool and equipment bookings with maintenance scheduling.',               category: 'Booking',       icon: PackageOpen    },
  { id: 29, name: 'Tour Booking',           description: 'Travel package reservations with guide and itinerary planning.',         category: 'Booking',       icon: MapPin         },
  { id: 30, name: 'Medical Appointment',    description: 'Patient scheduling with doctor availability and reminders.',             category: 'Booking',       icon: Stethoscope    },
  { id: 31, name: 'Conference Room',        description: 'Meeting room reservations with resource and AV management.',             category: 'Booking',       icon: Video          },
  { id: 32, name: 'Parking Reservation',    description: 'Spot booking, access codes, and occupancy monitoring.',                  category: 'Booking',       icon: Car            },
  { id: 33, name: 'Studio Booking',         description: 'Recording and creative studio time-slot management.',                    category: 'Booking',       icon: Music          },
  { id: 34, name: 'Service Booking',        description: 'Home and professional service scheduling with technician dispatch.',     category: 'Booking',       icon: ClipboardList  },

  // ── Record (17) ──────────────────────────────────────────────────────────────
  { id: 35, name: 'Electronic Records',     description: 'Secure digital storage and retrieval for enterprise compliance.',        category: 'Record',        icon: FileText       },
  { id: 36, name: 'Patient Records',        description: 'Medical history, prescriptions, and treatment documentation.',           category: 'Record',        icon: Heart          },
  { id: 37, name: 'Student Records',        description: 'Academic transcripts, grades, and enrollment history.',                  category: 'Record',        icon: GraduationCap  },
  { id: 38, name: 'Legal Documents',        description: 'Contract storage, version control, and legal compliance tracking.',      category: 'Record',        icon: Scale          },
  { id: 39, name: 'Financial Records',      description: 'Transaction logs, balance sheets, and audit-ready reporting.',           category: 'Record',        icon: CreditCard     },
  { id: 40, name: 'Property Registry',      description: 'Real estate title management and ownership documentation.',              category: 'Record',        icon: Home           },
  { id: 41, name: 'Employee Records',       description: 'Staff files, contracts, performance reviews, and certifications.',       category: 'Record',        icon: Users          },
  { id: 42, name: 'Inventory Records',      description: 'Stock movement history, batch tracking, and audit logs.',                category: 'Record',        icon: Package        },
  { id: 43, name: 'Audit Trail',            description: 'Immutable action logs for regulatory compliance and security.',          category: 'Record',        icon: Shield         },
  { id: 44, name: 'Compliance Records',     description: 'Policy adherence tracking and regulatory documentation.',               category: 'Record',        icon: Lock           },
  { id: 45, name: 'Contract Management',    description: 'Lifecycle tracking of agreements from draft to renewal.',               category: 'Record',        icon: FileText       },
  { id: 46, name: 'Media Archive',          description: 'Digital asset organisation, tagging, and retrieval system.',            category: 'Record',        icon: FolderOpen     },
  { id: 47, name: 'Research Records',       description: 'Lab data, findings, and experiment documentation management.',           category: 'Record',        icon: BookOpen       },
  { id: 48, name: 'Insurance Records',      description: 'Policy management, claims history, and risk documentation.',             category: 'Record',        icon: Shield         },
  { id: 49, name: 'Supplier Records',       description: 'Vendor profiles, ratings, and procurement history.',                    category: 'Record',        icon: Truck          },
  { id: 50, name: 'Vehicle Records',        description: 'Fleet maintenance logs, ownership, and registration tracking.',          category: 'Record',        icon: Car            },
  { id: 51, name: 'Quality Records',        description: 'Product inspection results, defect tracking, and QA reports.',          category: 'Record',        icon: Eye            },

  // ── Commercial (17) ──────────────────────────────────────────────────────────
  { id: 52, name: 'Retail Suite',           description: 'Omnichannel commerce platform for modern retail growth.',               category: 'Commercial',    icon: ShoppingCart   },
  { id: 53, name: 'Customer CRM',           description: 'Advanced relationship management and retention toolkit.',               category: 'Commercial',    icon: Users          },
  { id: 54, name: 'E-commerce Platform',    description: 'Full-featured online store with payments and fulfilment.',              category: 'Commercial',    icon: Globe          },
  { id: 55, name: 'Point of Sale',          description: 'In-store sales processing with inventory sync and analytics.',          category: 'Commercial',    icon: CreditCard     },
  { id: 56, name: 'Invoice Management',     description: 'Automated billing, payment tracking, and overdue alerts.',              category: 'Commercial',    icon: Receipt        },
  { id: 57, name: 'Subscription Billing',   description: 'Recurring revenue management with trial and plan upgrades.',            category: 'Commercial',    icon: BarChart3      },
  { id: 58, name: 'Marketplace',            description: 'Multi-vendor platform with seller dashboards and commission splits.',   category: 'Commercial',    icon: Store          },
  { id: 59, name: 'Wholesale Management',   description: 'Bulk order processing, pricing tiers, and B2B customer portals.',       category: 'Commercial',    icon: Warehouse      },
  { id: 60, name: 'Procurement System',     description: 'Purchase orders, supplier approvals, and spend analytics.',             category: 'Commercial',    icon: Package        },
  { id: 61, name: 'Quotation System',       description: 'Dynamic quote generation with approval workflows and conversion.',      category: 'Commercial',    icon: Tag            },
  { id: 62, name: 'Sales Pipeline',         description: 'Lead tracking, deal stages, and revenue forecasting.',                  category: 'Commercial',    icon: TrendingUp     },
  { id: 63, name: 'Loyalty Program',        description: 'Points, rewards, and tiered customer engagement programs.',             category: 'Commercial',    icon: Star           },
  { id: 64, name: 'Payment Gateway',        description: 'Secure multi-currency payment processing with fraud prevention.',       category: 'Commercial',    icon: CreditCard     },
  { id: 65, name: 'Trade Finance',          description: 'Letters of credit, trade credit, and financing instruments.',           category: 'Commercial',    icon: PieChart       },
  { id: 66, name: 'Supply Chain',           description: 'End-to-end visibility from procurement to last-mile delivery.',         category: 'Commercial',    icon: Truck          },
  { id: 67, name: 'Vendor Management',      description: 'Supplier onboarding, performance scoring, and contract management.',    category: 'Commercial',    icon: Users2         },
  { id: 68, name: 'Price Management',       description: 'Dynamic pricing rules, discount strategies, and margin control.',       category: 'Commercial',    icon: Tag            },

  // ── Communication (16) ───────────────────────────────────────────────────────
  { id: 69, name: 'Unified Comm Hub',       description: 'Integrated messaging and collaboration for global teams.',              category: 'Communication', icon: MessageSquare  },
  { id: 70, name: 'Team Chat',              description: 'Real-time messaging with channels, threads, and file sharing.',         category: 'Communication', icon: MessageCircle  },
  { id: 71, name: 'Video Conferencing',     description: 'HD video calls, screen sharing, and virtual meeting rooms.',            category: 'Communication', icon: Video          },
  { id: 72, name: 'Email Management',       description: 'Shared inboxes, templates, and automated email workflows.',             category: 'Communication', icon: Mail           },
  { id: 73, name: 'SMS Gateway',            description: 'Bulk messaging, transactional SMS, and delivery tracking.',             category: 'Communication', icon: Phone          },
  { id: 74, name: 'Customer Portal',        description: 'Self-service hub for clients to manage requests and documents.',        category: 'Communication', icon: Globe          },
  { id: 75, name: 'Help Desk',              description: 'Ticket management, SLA tracking, and support analytics.',               category: 'Communication', icon: Layers         },
  { id: 76, name: 'Social Media Hub',       description: 'Unified social posting, monitoring, and engagement analytics.',         category: 'Communication', icon: Network        },
  { id: 77, name: 'Newsletter System',      description: 'Email campaign builder with segmentation and performance metrics.',     category: 'Communication', icon: Mail           },
  { id: 78, name: 'Push Notifications',     description: 'Web and mobile push alerts with targeting and scheduling.',             category: 'Communication', icon: Bell           },
  { id: 79, name: 'VoIP System',            description: 'Cloud telephony with call routing, recording, and analytics.',          category: 'Communication', icon: Phone          },
  { id: 80, name: 'Internal Wiki',          description: 'Team knowledge base with collaborative editing and search.',             category: 'Communication', icon: BookOpen       },
  { id: 81, name: 'Announcement Board',     description: 'Company-wide communications with acknowledgement tracking.',            category: 'Communication', icon: Megaphone      },
  { id: 82, name: 'Client Portal',          description: 'Branded portals for project updates and secure document sharing.',      category: 'Communication', icon: Users          },
  { id: 83, name: 'Feedback System',        description: 'Surveys, NPS tracking, and structured feedback collection.',            category: 'Communication', icon: Star           },
  { id: 84, name: 'Community Forum',        description: 'Moderated discussion boards for customers and stakeholders.',           category: 'Communication', icon: MessageSquare  },

  // ── Intelligence (16) ────────────────────────────────────────────────────────
  { id: 85,  name: 'Business AI',           description: 'Data-driven predictive insights and machine learning models.',          category: 'Intelligence',  icon: Brain          },
  { id: 86,  name: 'Analytics Dashboard',   description: 'Real-time KPI monitoring with customisable visual reports.',            category: 'Intelligence',  icon: BarChart3      },
  { id: 87,  name: 'Predictive Analytics',  description: 'Forecast trends using historical data and ML algorithms.',              category: 'Intelligence',  icon: TrendingUp     },
  { id: 88,  name: 'Data Warehouse',        description: 'Centralised data storage with ETL pipelines and query optimisation.',   category: 'Intelligence',  icon: Database       },
  { id: 89,  name: 'Report Builder',        description: 'Drag-and-drop report creation with scheduling and sharing.',            category: 'Intelligence',  icon: FileText       },
  { id: 90,  name: 'Business Intelligence', description: 'Enterprise-wide data insights, drill-downs, and executive summaries.',  category: 'Intelligence',  icon: PieChart       },
  { id: 91,  name: 'Machine Learning Suite',description: 'Train, deploy, and monitor ML models on your business data.',          category: 'Intelligence',  icon: Cpu            },
  { id: 92,  name: 'Fraud Detection',       description: 'AI-powered anomaly detection to flag suspicious transactions.',         category: 'Intelligence',  icon: Shield         },
  { id: 93,  name: 'Demand Forecasting',    description: 'Inventory and sales predictions using seasonal and trend data.',        category: 'Intelligence',  icon: LineChart      },
  { id: 94,  name: 'Customer Insights',     description: 'Behavioural profiling, segmentation, and churn prediction.',            category: 'Intelligence',  icon: Target         },
  { id: 95,  name: 'Market Intelligence',   description: 'Competitor tracking, pricing signals, and market trend alerts.',        category: 'Intelligence',  icon: Globe          },
  { id: 96,  name: 'Performance Analytics', description: 'Team and process performance scoring with actionable insights.',        category: 'Intelligence',  icon: Activity       },
  { id: 97,  name: 'Risk Assessment',       description: 'AI-driven risk scoring for projects, investments, and operations.',     category: 'Intelligence',  icon: AlertTriangle  },
  { id: 98,  name: 'Sentiment Analysis',    description: 'Customer review and feedback sentiment tracking at scale.',             category: 'Intelligence',  icon: MessageCircle  },
  { id: 99,  name: 'Recommendation Engine', description: 'Personalised product and content suggestions powered by AI.',           category: 'Intelligence',  icon: Settings2      },
  { id: 100, name: 'AI Assistant',          description: 'Conversational AI for internal operations and customer support.',       category: 'Intelligence',  icon: Bot            },
]

const ITEMS_PER_PAGE = 8
const FILTER_TABS: (Category | 'All')[] = [
  'All', 'Management', 'Booking', 'Record', 'Commercial', 'Communication', 'Intelligence',
]

export default function SystemsPage() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All')
  const [currentPage, setCurrentPage] = useState(1)

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return SYSTEMS
    return SYSTEMS.filter(s => s.category === activeCategory)
  }, [activeCategory])

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const pageItems = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  const handleCategoryChange = (cat: Category | 'All') => {
    setActiveCategory(cat)
    setCurrentPage(1)
  }

  // Show 5 consecutive pages centered on the current page
  const pageNumbers = useMemo((): number[] => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1)
    let start = Math.max(1, currentPage - 2)
    const end = Math.min(totalPages, start + 4)
    start = Math.max(1, end - 4)
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }, [currentPage, totalPages])

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">

        {/* ── Header ──────────────────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
              Explore the 
              <span className="text-blue-500"> 6ystems</span>
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed">
              Structured across 6 essential system classes and 6 core pillars of enterprise
              architecture. Streamline your business operations with our comprehensive
              modular framework.
            </p>
          </div>

          {/* Icon grid card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex-shrink-0 self-start">
            <div className="grid grid-cols-3 gap-3">
              {HEADER_ICONS.map(({ icon: Icon, label }) => {
                const cfg = CATEGORY_CONFIG[label as Category]
                return (
                  <button
                    key={label}
                    onClick={() => handleCategoryChange(label as Category)}
                    title={label}
                    className={cn(
                      'w-10 h-10 flex items-center justify-center rounded-xl transition-colors',
                      cfg.iconBg, cfg.iconColor,
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* ── Filter tabs ─────────────────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTER_TABS.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={cn(
                'px-4 py-1.5 rounded-full text-sm font-medium transition-colors',
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Systems grid ────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {pageItems.map(system => {
            const config = CATEGORY_CONFIG[system.category]
            const Icon = system.icon
            return (
              <div
                key={system.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow cursor-default"
              >
                <div className={cn('w-10 h-10 rounded-lg flex items-center justify-center mb-4', config.iconBg)}>
                  <Icon className={cn('w-5 h-5', config.iconColor)} />
                </div>
                <h3 className="text-blue-600 font-semibold text-sm mb-2 leading-snug">
                  {system.name}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
                  {system.description}
                </p>
                <span className={cn('inline-block px-2.5 py-0.5 rounded-full text-xs font-medium', config.badge)}>
                  {system.category}
                </span>
              </div>
            )
          })}
        </div>

        {/* ── Pagination ──────────────────────────────────────────────────────── */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-1 mb-8">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {pageNumbers.map(n => (
              <button
                key={n}
                onClick={() => setCurrentPage(n)}
                aria-label={`Page ${n}`}
                aria-current={currentPage === n ? 'page' : undefined}
                className={cn(
                  'w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-colors',
                  currentPage === n
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-200',
                )}
              >
                {n}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* ── CTA Section ─────────────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-gray-100 py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
            Build Your Business Systems with 6ystems
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Join thousands of enterprises using our modular platform to build scalable,
            reliable, and intelligent systems.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/#studio-mode"
              className="px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              Explore Studio Mode
            </a>
            <a
              href="/#get-started"
              className="px-6 py-3 bg-white text-gray-800 border border-gray-200 rounded-full text-sm font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  )
}
