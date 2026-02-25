import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ChevronDown, ChevronRight, Building2, Users, Clock, DollarSign, Shield, Heart, Utensils, Phone, AlertTriangle, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "@assets/MBB_Logo_transparentBackground_1769633024742.png";

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const sections: Section[] = [
  {
    id: "welcome",
    title: "Welcome & Mission",
    icon: <Building2 className="h-5 w-5" />,
    content: (
      <div className="space-y-4">
        <p>Welcome to our team! We welcome you to Mouton's Bistro and look forward to the opportunity to work with you. We want you to know that we recognize our employees as our most valuable asset.</p>
        <p>Our continued success in providing the highest quality of food, beverages, and service to our customers depends on having quality people like yourself and your fellow employees. We want you to enjoy your time here and are committed to helping you to succeed in your new job.</p>
        <p className="italic">Sincerely, Ben and Rachel Mouton</p>
        
        <h4 className="font-semibold mt-6">Company Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-muted rounded-md">
            <p className="font-medium">Leander Location</p>
            <p>1821 S Lakeline Blvd #104</p>
            <p>Leander, TX 78641</p>
            <p>(512) 260-6300</p>
            <p>manager@moutonsbistro.com</p>
          </div>
          <div className="p-3 bg-muted rounded-md">
            <p className="font-medium">Cedar Park Location</p>
            <p>Cedar Park, TX 78613</p>
            <p>(512) 356-9300</p>
            <p>cedarpark@moutonsbistro.com</p>
          </div>
        </div>
        <p>Website: www.moutonsbistro.com</p>

        <h4 className="font-semibold mt-6">Mission Statement</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>To sell delicious and remarkable food and drinks that meet the highest standards of quality, freshness and seasonality</li>
          <li>To combine both modern-creative and traditional southern styles of cooking</li>
          <li>To consistently provide our customers with impeccable service by demonstrating warmth, graciousness, efficiency, knowledge, professionalism and integrity</li>
          <li>To have every customer leave impressed and excited to come back again</li>
          <li>To create and maintain a restaurant that is exceptional in its attention to every detail</li>
          <li>To provide a friendly, cooperative and rewarding environment that encourages long-term, satisfying employment</li>
          <li>To be a giving member of the Cedar Park community</li>
        </ul>

        <h4 className="font-semibold mt-6">Core Values</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>WOW Factor:</strong> We want customers to walk out saying WOW to the service, food, and atmosphere</li>
          <li><strong>Honesty and Trust:</strong> We work to build trust in each transaction and interaction</li>
          <li><strong>Training and Development:</strong> We invest in our people to help them achieve their potential</li>
          <li><strong>Teamwork:</strong> Great achievements are only possible from helping and respecting each other</li>
          <li><strong>Professionalism:</strong> We take great pride in having good systems to standardize our products and procedures</li>
        </ul>
      </div>
    )
  },
  {
    id: "employment",
    title: "Employment Policies",
    icon: <Users className="h-5 w-5" />,
    content: (
      <div className="space-y-4">
        <h4 className="font-semibold">Work Authorization</h4>
        <p>It is the policy of Mouton's Bistro to hire only United States citizens and aliens who are authorized to work in this country. As required by law, employees will be required to provide original documents that establish this authorization within three days of their date of hire.</p>

        <h4 className="font-semibold mt-6">Non-Discrimination</h4>
        <p>Mouton's Bistro is an equal opportunity employer. We will not tolerate discrimination based on race, sex, age, national origin, religion, sexual orientation, or disability. Employment decisions will be made only for legitimate business reasons based upon qualifications and other nondiscriminatory factors.</p>

        <h4 className="font-semibold mt-6">Age Requirements</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>All servers and bartenders must be at least 18 years of age</li>
          <li>Employees under 18 must comply with all federal wage and hour guidelines</li>
          <li>No employees under 18 can take orders for or serve alcoholic beverages</li>
        </ul>

        <h4 className="font-semibold mt-6">Orientation Period</h4>
        <p>We have a 30 day Orientation Period that allows both you and the Company to see whether or not it's a good fit. During this time you will begin training and be observed by management. If you need additional training, we encourage you to ask questions and seek help from our management staff.</p>

        <h4 className="font-semibold mt-6">Training</h4>
        <p>You will receive adequate training and will not be expected to be on your own until you are ready. Your trainers are considered our "best" and have been certified to train for that position.</p>

        <h4 className="font-semibold mt-6">Evaluations</h4>
        <p>All employees receive written and verbal performance evaluations twice a year, in January and June. The evaluation process is an opportunity to identify accomplishments and strengths as well as areas for improvement. Depending on your position and performance, you may be eligible for a pay increase.</p>
      </div>
    )
  },
  {
    id: "schedules",
    title: "Schedules & Time",
    icon: <Clock className="h-5 w-5" />,
    content: (
      <div className="space-y-4">
        <h4 className="font-semibold">Schedules</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Schedules are posted weekly every Wednesday through the Homebase App</li>
          <li>Each employee is responsible for working their shifts</li>
          <li>All requests and shift changes should be handled through the app</li>
          <li>Arrive 10-15 minutes before your shift begins</li>
          <li>Employees must enter and exit through the front door during business hours</li>
          <li>Schedule changes require finding a replacement and getting manager approval</li>
        </ul>

        <h4 className="font-semibold mt-6">Time Clock Procedures</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Arrive 10-15 minutes before your scheduled start time</li>
          <li>Notify the Manager on duty that you have arrived</li>
          <li>You may clock in within 5 minutes of the start of your shift</li>
          <li>Tampering, altering, or falsifying time records is not allowed and may result in termination</li>
        </ul>

        <h4 className="font-semibold mt-6">Overtime</h4>
        <p>Employees are paid overtime (one and one-half times basic rate) when they work more than 40 hours in one week. Tip credit will be factored into the hourly rate for tipped employees.</p>

        <h4 className="font-semibold mt-6">Absences & Tardiness</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>If you will be late or miss work, call and talk to a manager at least 2 hours before your shift</li>
          <li>Not calling or showing up for two consecutive shifts = voluntary resignation</li>
          <li>Employee Leave Requests should be submitted at least two weeks prior</li>
          <li>Repeated tardiness is grounds for termination</li>
        </ul>

        <h4 className="font-semibold mt-6">Resignations</h4>
        <p>Please give a two-week notice of your plans to leave. This professional courtesy ensures you are eligible for re-hire.</p>
      </div>
    )
  },
  {
    id: "pay",
    title: "Pay & Benefits",
    icon: <DollarSign className="h-5 w-5" />,
    content: (
      <div className="space-y-4">
        <h4 className="font-semibold">Tip Reporting</h4>
        <p>All tips (cash or credit card) are taxable income. You are required by federal law to report and record your actual tips for each shift on the Server Check-Out form. We strongly encourage accurate tip reporting to reduce IRS audit chances and qualify for greater social security, unemployment and worker's compensation benefits.</p>

        <h4 className="font-semibold mt-6">Paychecks</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Paychecks are available every other Monday after 5pm</li>
          <li>Report any address changes to Ben Mouton for W-2 mailings</li>
          <li>Lost paychecks: Report to Ben Mouton for stop payment and reissue (bank charge deducted)</li>
        </ul>

        <h4 className="font-semibold mt-6">Employee Meals</h4>
        <p>Employees receive a $5 discount off the regular price of all menu items during each shift. Employee meals can be purchased before or after your shift or on a scheduled break.</p>

        <h4 className="font-semibold mt-6">Holidays</h4>
        <p>Due to the nature of the restaurant business you may be required to work holidays. The Restaurant is closed on: Thanksgiving Day, Christmas Day, and Easter Sunday.</p>

        <h4 className="font-semibold mt-6">Vacations</h4>
        <p>Full-time salaried employees (35+ hours/week average) who have been with the Restaurant for 12 consecutive months are eligible for one week paid vacation. Submit vacation requests at least one month prior.</p>

        <h4 className="font-semibold mt-6">Family and Medical Leave</h4>
        <p>Employees who have worked at least 12 months and 1,250 hours may be granted up to 12 workweeks of unpaid leave for birth/adoption of a child, caring for family with serious health conditions, or personal serious health conditions.</p>

        <h4 className="font-semibold mt-6">Worker's Compensation</h4>
        <p>Provides benefits for employees who suffer personal injury from accidents or illnesses arising from employment. Report all injuries to the manager on duty immediately.</p>
      </div>
    )
  },
  {
    id: "conduct",
    title: "Standards of Conduct",
    icon: <Shield className="h-5 w-5" />,
    content: (
      <div className="space-y-4">
        <p className="text-destructive font-medium">The following conduct may result in disciplinary action up to and including immediate termination:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Invalid Work Authorization (I-9 form)</li>
          <li>Supplying false or misleading information</li>
          <li>No call, no show (no job)</li>
          <li>Clocking in/out for another employee</li>
          <li>Leaving before scheduled time without permission</li>
          <li>Arrest or conviction of a felony offense</li>
          <li>Use of foul or abusive language</li>
          <li>Disorderly or indecent conduct</li>
          <li>Gambling on Restaurant property</li>
          <li>Theft of customer, employee or Restaurant property</li>
          <li>Theft, dishonesty or mishandling of funds</li>
          <li>Refusal to follow instructions</li>
          <li>Harassment of any kind</li>
          <li>Failure to perform job responsibilities satisfactorily within 90 days</li>
          <li>Use, distribution or possession of illegal drugs</li>
          <li>Waste or destruction of Restaurant property</li>
          <li>Actions or threats of violence</li>
          <li>Excessive tardiness</li>
          <li>Habitual failure to punch in or out</li>
          <li>Disclosing confidential information, recipes, or policies</li>
          <li>Rude behavior with customers or discussing tips</li>
          <li>Smoking or eating in unapproved areas</li>
          <li>Not parking in employee designated areas</li>
          <li>Not using approved entrance/exit</li>
          <li>Failure to comply with grooming standards</li>
          <li>Failure to comply with uniform requirements</li>
          <li>Unauthorized operation or repair of equipment</li>
          <li>Failure to report safety hazards or accidents immediately</li>
        </ol>
      </div>
    )
  },
  {
    id: "harassment",
    title: "Harassment Policy",
    icon: <Heart className="h-5 w-5" />,
    content: (
      <div className="space-y-4">
        <p>It is this restaurant's policy to treat all personnel with dignity and respect. We strive to provide everyone a workplace that is free of harassment of any kind.</p>

        <h4 className="font-semibold mt-6">Sexual Harassment</h4>
        <p>All employees have a right to be free from sexual harassment. Mouton's Bistro does not condone actions, words, jokes or comments that a reasonable person would regard as sexually harassing or coercive.</p>

        <h4 className="font-semibold mt-6">Definition</h4>
        <p>Sexual harassment encompasses any sexual attention, from either gender, that is unwanted, including:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Physical assault</li>
          <li>Direct or implied threats that submission to sexual advances will be a condition of employment</li>
          <li>Direct propositions of a sexual nature</li>
          <li>Comments of a sexual nature</li>
          <li>Sexually explicit statements, questions, jokes or anecdotes</li>
          <li>Unnecessary touching, patting, hugging or brushing</li>
          <li>Remarks about a person's clothing, body, or sexual experience</li>
        </ul>

        <h4 className="font-semibold mt-6">Reporting</h4>
        <p>Anyone who feels it necessary to discuss what may appear to be sexual harassment should report the harassment promptly to at least two people who are in a supervisory or management capacity. Your report will be kept as confidential as possible. If a claim is substantiated, the Company will take immediate and appropriate action, including discipline and possible termination.</p>
      </div>
    )
  },
  {
    id: "customer-service",
    title: "Customer Service",
    icon: <Phone className="h-5 w-5" />,
    content: (
      <div className="space-y-4">
        <p>Our restaurant exists only because of customers. Without the customer we don't have a restaurant - they are the only reason we are here. Taking care of our customers is our highest priority, never an interruption. <strong>At Mouton's Bistro the customer always comes first!</strong></p>

        <h4 className="font-semibold mt-6">Handling Customer Complaints</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Don't get defensive and try to explain</li>
          <li>Remove the offending item immediately</li>
          <li>Apologize for the problem and tell the customer you will take care of it</li>
          <li>If you need help, don't hesitate to ask a manager</li>
          <li>Let the customer know you care and this isn't the experience you want them to have</li>
        </ul>

        <h4 className="font-semibold mt-6">Telephone Courtesy</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>It is everyone's responsibility to answer the phone</li>
          <li>Always answer promptly, within two rings</li>
          <li>Answer: "Good [morning/afternoon/evening], thank you for calling Mouton's Bistro [location], this is [name], how may I help you?"</li>
          <li>If uncertain about a question, ask to put them on hold and refer to a manager</li>
          <li>Always thank the person for calling</li>
        </ul>

        <h4 className="font-semibold mt-6">Teamwork</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>If a co-worker is overloaded and you're not, help them</li>
          <li>Pitch in to help a customer whether they are technically yours or not</li>
          <li>If you've mastered something, offer to help others learn</li>
          <li>Genuine teamwork makes for happier (and more generous) customers</li>
        </ul>

        <h4 className="font-semibold mt-6">Staff Meetings</h4>
        <p>Staff meetings are held regularly for new menu offerings, promotions, training, and policies. Meetings are treated as a shift and attendance is mandatory.</p>
      </div>
    )
  },
  {
    id: "safety",
    title: "Safety & Sanitation",
    icon: <AlertTriangle className="h-5 w-5" />,
    content: (
      <div className="space-y-4">
        <h4 className="font-semibold">Safety Guidelines</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Wipe up spills immediately</li>
          <li>Never run - always walk carefully, even when busy</li>
          <li>Wear shoes with non-slip soles</li>
          <li>Report defective equipment to a manager immediately</li>
          <li>Never operate equipment unless trained</li>
          <li>Pay special attention when using slicers - wear no-cut gloves when cleaning</li>
          <li>Never try to catch a falling knife</li>
          <li>Yell "HOT STUFF COMING THROUGH" when carrying hot items</li>
          <li>Don't put hot food/plates in front of small children</li>
          <li>Use proper lifting techniques - bend at knees, lift with legs</li>
        </ul>

        <h4 className="font-semibold mt-6">Sanitation Rules</h4>
        <p className="text-destructive font-medium">We are obsessed with sanitation and food safety! NEVER take shortcuts on food safety.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Wash hands:</strong> After using restroom, smoking, touching hair, eating, sneezing or coughing</li>
          <li><strong>Sanitize everything:</strong> Keep counters, cutting surfaces, and utensils sanitized</li>
          <li><strong>Prevent cross-contamination:</strong> Never place raw meat on surfaces/utensils used for other food without washing and sanitizing first</li>
          <li><strong>Temperature control:</strong> Store hazardous foods below 45°F, cooking/holding above 140°F</li>
          <li><strong>Storage:</strong> Raw meat below cooked food, raw poultry on bottom shelf</li>
          <li><strong>Chemicals:</strong> Keep cleaning products away from food</li>
        </ul>

        <h4 className="font-semibold mt-6">Accidents and Emergencies</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Report ALL accidents to the manager on duty, no matter how minor</li>
          <li>For injuries or choking, notify a manager immediately</li>
          <li>Managers administer CPR, choking procedures, or first aid</li>
        </ul>

        <h4 className="font-semibold mt-6">Fire Protection</h4>
        <p>Know the location and operation of fire protection equipment. If the fire alarm sounds, assist guests to the nearest exit immediately.</p>

        <h4 className="font-semibold mt-6">Crime and Robbery</h4>
        <p className="text-destructive font-medium">If involved in a robbery, DO NOT RESIST. People who resist are three times more likely to be injured. Always cooperate fully!</p>
      </div>
    )
  },
  {
    id: "dress-code",
    title: "Dress Code",
    icon: <Utensils className="h-5 w-5" />,
    content: (
      <div className="space-y-4">
        <h4 className="font-semibold">Dining Room Dress Code</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Shoes:</strong> Non-slip, close-toed shoes (www.shoesforcrews.com)</li>
          <li><strong>Pants:</strong> Jeans, black, or khaki pants, shorts, or skirt. Solid color belts required with belt loops</li>
          <li><strong>Shirts:</strong> Clean black Mouton's t-shirt</li>
          <li><strong>Appearance:</strong> Clean, well-groomed hair pulled back off shoulders. Neat facial hair</li>
          <li><strong>Accessories:</strong> No excessive cologne, perfume, makeup or jewelry. No earrings longer than 1 inch. No unauthorized hats or buttons</li>
          <li><strong>Apron:</strong> Your choice (Ace Mart, Mission Supply, eBay, Amazon)</li>
          <li><strong>Bank:</strong> $20 bank of small bills required - restaurant does not provide change</li>
        </ul>

        <h4 className="font-semibold mt-6">Kitchen Dress Code</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Shoes:</strong> Black work shoes with non-slip soles. No tennis shoes</li>
          <li><strong>Pants:</strong> Black pants or jeans. No shorts. Always clean and well maintained</li>
          <li><strong>Shirts:</strong> Black t-shirt or black Mouton's t-shirt. Lead cook and anyone running food must wear black chef coat</li>
          <li><strong>Appearance:</strong> Clean, well-groomed hair, hands and fingernails. Neat facial hair</li>
          <li><strong>Accessories:</strong> No excessive cologne, perfume, makeup or jewelry</li>
          <li><strong>Hats:</strong> Hat or hair net required at all times when working with food. No alcohol advertisements</li>
        </ul>

        <h4 className="font-semibold mt-6">Getting Shirts</h4>
        <p>You should have received 1 complimentary shirt. Additional shirts can be purchased by ringing in a shirt and closing to cash, then presenting the receipt to a manager.</p>
      </div>
    )
  },
  {
    id: "alcohol",
    title: "Alcohol Service",
    icon: <Shield className="h-5 w-5" />,
    content: (
      <div className="space-y-4">
        <p>As a Restaurant that sells alcoholic beverages, we are committed to sensible, socially responsible consumption of alcohol.</p>

        <h4 className="font-semibold mt-6">Alcohol Service Policies</h4>
        <ol className="list-decimal pl-5 space-y-2">
          <li>We will NOT serve alcoholic beverages to an intoxicated person</li>
          <li>We will NOT knowingly serve a person under the legal drinking age. <strong>Card anyone who appears to be under 30 years old</strong></li>
          <li>We will offer nonalcoholic alternatives such as soft drinks, coffee, juice, etc.</li>
          <li>The Restaurant will provide free taxi service for intoxicated customers</li>
        </ol>

        <p className="mt-4">If a customer shows signs of drinking too much, inform a manager immediately.</p>
      </div>
    )
  }
];

export default function Handbook() {
  const [expandedSection, setExpandedSection] = useState<string | null>("welcome");

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-[#2C1810] text-white shadow-lg print:hidden">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" data-testid="button-back-home">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <img src={logo} alt="Mouton's Bistro" className="h-10 w-auto" />
              <div>
                <h1 className="text-xl font-semibold">Employee Handbook</h1>
                <p className="text-xs text-white/70">Revised 2026</p>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={handlePrint} className="text-white border-white/30 hover:bg-white/10" data-testid="button-print-handbook">
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <Card className="mb-6 print:hidden">
          <CardContent className="pt-6">
            <p className="text-muted-foreground">
              This handbook answers common questions about Mouton's Bistro policies and procedures. 
              Read it thoroughly and contact a manager if you have any questions.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-3">
          {sections.map((section) => (
            <Card key={section.id} className="overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full text-left"
                data-testid={`button-section-${section.id}`}
              >
                <CardHeader className="flex flex-row items-center gap-3 py-4 hover-elevate cursor-pointer">
                  <div className="p-2 bg-primary/10 rounded-md text-primary">
                    {section.icon}
                  </div>
                  <CardTitle className="flex-1 text-lg">{section.title}</CardTitle>
                  {expandedSection === section.id ? (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  )}
                </CardHeader>
              </button>
              {expandedSection === section.id && (
                <CardContent className="pt-0 pb-6 border-t">
                  <div className="pt-4 text-sm leading-relaxed">
                    {section.content}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <Card className="mt-6 bg-muted/50">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground text-center">
              This Employee Handbook does not constitute a contract of employment. 
              The Company reserves the right to change any portion with or without notice.
              Texas is an at-will work state.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
