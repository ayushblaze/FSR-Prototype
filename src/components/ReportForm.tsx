import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface ReportFormProps {
  selectedType: string;
}

const ReportForm: React.FC<ReportFormProps> = ({ selectedType }) => {
  const form = useForm();
  function onSubmit(data: any) {
    // handle submit
    console.log(data);
  }
  return (
    <div className="max-w-2xl p-5 rounded-xl shadow-md border bg-white">
      <h2 className="text-xl font-semibold mb-4">{selectedType}</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Claim Details */}
          {[
            { name: "claimNo", label: "Claim No." },
            {
              name: "insuredNameAddress",
              label: "Name and Address of Insured",
            },
            { name: "lossLocationAddress", label: "Address of Loss Location" },
            { name: "dateOfLoss", label: "Date of Loss" },
            { name: "dateOfIntimation", label: "Date of Intimation" },
            {
              name: "reasonForDelayIntimation",
              label: "Reason for Delay Intimation",
            },
            { name: "sourceOfInstruction", label: "Source of Instruction" },
            { name: "dateOfSurveyVisit", label: "Date of Surevey/Visit" },
            { name: "personContacted", label: "Person Contacted" },
          ].map(({ name, label }) => (
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field }) => (
                <FormItem className="flex items-center mb-2">
                  <FormLabel className="w-64 min-w-64 font-medium text-gray-700">
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

          {/* Policy Particulars Group */}
          <div className="mt-8 mb-2 text-lg font-semibold">
            Policy Particulars
          </div>
          {[
            { name: "policyTypeNo", label: "Policy Type/No." },
            { name: "periodOfInsurance", label: "Period of Insurance" },
            { name: "insurers", label: "Insurers" },
            {
              name: "insuredNameAddressPolicy",
              label: "Name and address of Insured",
            },
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
                <FormItem className="flex items-center gap-4 mb-2">
                  <FormLabel className="w-64 min-w-64 font-medium text-gray-700">
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

          <Button type="submit" className="mt-2">
            Generate File
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ReportForm;
