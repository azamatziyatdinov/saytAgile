import React, { useState } from "react";
import { AdminLogin, AdminDashboard } from "./AdminDashboard";
import AgileDiagnostika from "./AgileDiagnostika";
import HomePage from "./HomePage";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function App() {
  const [adminSession, setAdminSession] = useState(null);
  const [started, setStarted] = useState(false);
  const [orgName, setOrgName] = useState("");
  const [language, setLanguage] = useState("ru");

  if (adminSession) {
    return (
      <AdminDashboard
        onLogout={async () => {
          await supabase.auth.signOut();
          setAdminSession(null);
        }}
      />
    );
  }

  const urlHash = window.location.hash;
  if (urlHash === "#admin") {
    return <AdminLogin onLogin={(session) => setAdminSession(session)} />;
  }

  return started ? (
    <AgileDiagnostika
      orgName={orgName}
      language={language}
      onRestart={() => {
        setStarted(false);
        setOrgName("");
      }}
    />
  ) : (
    <HomePage
      onStart={(name, lang) => {
        setOrgName(name);
        setLanguage(lang);
        setStarted(true);
      }}
    />
  );
}
