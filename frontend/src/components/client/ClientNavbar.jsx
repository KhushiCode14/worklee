import { Bell, ChevronDown, HelpCircle, Search, User } from "lucide-react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import SearchBar from "../ui/Search";

const ClientNavbar = () => {
  return (
    <div>
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold">upwork</h1>
            <nav className="items-center hidden space-x-4 md:flex">
              <Button variant="ghost">Hire talent</Button>
              <Button variant="ghost">Manage work</Button>
              <Button variant="ghost">Reports</Button>
              <Button variant="ghost">Messages</Button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            {/* <div className="relative hidden w-64 md:block">
              <Search
                className="absolute left-2 top-2.5 h-4 w-4 text-gray-500"
                aria-label="Search Icon"
              />
              <Input placeholder="Search" className="pl-8" />
            </div> */}
            <SearchBar />
            <Button variant="ghost" size="icon" aria-label="Help">
              <HelpCircle className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" className="gap-2">
              <User className="w-5 h-5" />
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientNavbar;
