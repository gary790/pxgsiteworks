-- Contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT DEFAULT '',
  subject TEXT DEFAULT 'General Inquiry',
  message TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Land clearing quotes table
CREATE TABLE IF NOT EXISTS land_clearing_quotes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT DEFAULT '',
  property_address TEXT DEFAULT '',
  lot_size_acres REAL DEFAULT 0,
  tree_density TEXT DEFAULT '',
  access_difficulty TEXT DEFAULT '',
  stump_removal INTEGER DEFAULT 0,
  derooting INTEGER DEFAULT 0,
  debris_haul INTEGER DEFAULT 0,
  onsite_disposal INTEGER DEFAULT 0,
  notes TEXT DEFAULT '',
  estimated_cost REAL DEFAULT 0,
  cost_breakdown TEXT DEFAULT '{}',
  project_timeline TEXT DEFAULT '',
  status TEXT DEFAULT 'pending',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_messages(email);
CREATE INDEX IF NOT EXISTS idx_quotes_email ON land_clearing_quotes(customer_email);
CREATE INDEX IF NOT EXISTS idx_quotes_status ON land_clearing_quotes(status);
