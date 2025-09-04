import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ReportFormProps {
  selectedType: string;
}

const ReportForm: React.FC<ReportFormProps> = ({ selectedType }) => {
  const form = useForm();
  function onSubmit(data: any) {
    console.log(data);
    fetch("http://localhost:8000/fsr", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "report.docx";
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="max-w-4xl p-5 rounded-xl shadow-md border bg-white">
      <h2 className="text-xl font-semibold mb-4">{selectedType}</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Document Header Section */}
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-4 text-blue-700">
              Document Header
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "refNo", label: "Reference Number" },
                { name: "date", label: "Date" },
                { name: "recipient", label: "Recipient Company" },
                { name: "kindAttention", label: "Kind Attention" },
              ].map(({ name, label }) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name}
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="font-medium text-gray-700">
                        {label}
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>

            {/* Recipient Address */}
            <div className="mt-4">
              <FormField
                control={form.control}
                name="recipientAddress1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-gray-700">
                      Recipient Address Line 1
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="recipientAddress2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-gray-700">
                      Recipient Address Line 2
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Policy Details Section */}
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-4 text-blue-700">
              Policy Type & Number
            </h3>
            {[
              { name: "policyType1", label: "Policy Type/No. 1" },
              { name: "policyType2", label: "Policy Type/No. 2" },
            ].map(({ name, label }) => (
              <FormField
                key={name}
                control={form.control}
                name={name}
                render={({ field }) => (
                  <FormItem className="mb-3">
                    <FormLabel className="font-medium text-gray-700">
                      {label}
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>

          {/* Claim Details Section */}
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-4 text-blue-700">
              Claim Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "insurerClaimNo", label: "Insurer Claim No." },
                { name: "edmeControlNo", label: "Edme Control No." },
              ].map(({ name, label }) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-gray-700">
                        {label}
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
          </div>

          {/* Insured Details Section */}
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-4 text-blue-700">
              Name & Address of Insured
            </h3>
            {[
              { name: "insuredName", label: "Insured Company Name" },
              { name: "insuredAddress1", label: "Address Line 1" },
              { name: "insuredAddress2", label: "Address Line 2" },
            ].map(({ name, label }) => (
              <FormField
                key={name}
                control={form.control}
                name={name}
                render={({ field }) => (
                  <FormItem className="mb-3">
                    <FormLabel className="font-medium text-gray-700">
                      {label}
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>

          {/* Loss Details Section */}
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-4 text-blue-700">
              Loss Details
            </h3>
            <FormField
              control={form.control}
              name="lossAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-gray-700">
                    Address of Loss
                  </FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={3} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Survey Details Section */}
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-4 text-blue-700">
              Survey Details
            </h3>
            <div className="mb-4">
              <FormField
                control={form.control}
                name="dateOfSurveyVisit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-gray-700">
                      Date of Survey/Visit
                    </FormLabel>
                    <FormControl>
                      <Input {...field} type="date" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <h4 className="font-medium mb-3">Person Contacted</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <FormField
                control={form.control}
                name="contactPersonTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-gray-700">
                      Title
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Mr./Ms./Dr." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactPersonName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-gray-700">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactPersonCountryCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-gray-700">
                      Country Code
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="+91" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactPersonPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-gray-700">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Policy Particulars Section (from your existing form) */}
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-4 text-blue-700">
              Policy Particulars
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "periodOfInsurance", label: "Period of Insurance" },
                { name: "insurers", label: "Insurers" },
                { name: "riskLocation", label: "Risk Location" },
                { name: "bankFinanciers", label: "Bank/Financiers" },
                { name: "sumInsured", label: "Sum Insured" },
                { name: "interestInsured", label: "Interest Insured" },
              ].map(({ name, label }) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-gray-700">
                        {label}
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
          </div>

          <Button type="submit" className="mt-2">
            Generate File
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ReportForm;
