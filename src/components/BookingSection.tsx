import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Phone, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const services = [
  "Corte Feminino",
  "Escova",
  "Coloração",
  "Hidratação Capilar",
  "Manicure",
  "Pedicure",
  "Design de Sobrancelha",
  "Alongamento de Unhas",
  "Maquiagem Profissional",
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00",
];

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service || !formData.date || !formData.time) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    toast.success("Agendamento solicitado com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", phone: "", service: "", date: "", time: "", message: "" });
  };

  return (
    <section id="agendamento" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-salon-gold uppercase tracking-[0.2em] text-sm font-body mb-3">Agende Online</p>
          <h2 className="section-title text-foreground">Marque seu Horário</h2>
          <div className="gold-line" />
          <p className="section-subtitle font-body mt-6">
            Preencha o formulário abaixo e nossa equipe confirmará seu agendamento.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl border border-border p-6 md:p-10 space-y-6 shadow-sm"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground font-body flex items-center gap-2">
                <User className="w-4 h-4 text-muted-foreground" /> Nome *
              </label>
              <Input
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground font-body flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" /> Telefone *
              </label>
              <Input
                placeholder="(11) 99999-9999"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-background"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground font-body">Serviço *</label>
            <Select value={formData.service} onValueChange={(v) => setFormData({ ...formData, service: v })}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Selecione um serviço" />
              </SelectTrigger>
              <SelectContent>
                {services.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground font-body flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" /> Data *
              </label>
              <Input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground font-body flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" /> Horário *
              </label>
              <Select value={formData.time} onValueChange={(v) => setFormData({ ...formData, time: v })}>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Selecione o horário" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((t) => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground font-body flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-muted-foreground" /> Mensagem (opcional)
            </label>
            <Textarea
              placeholder="Alguma observação ou pedido especial?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background min-h-[100px]"
            />
          </div>

          <Button variant="gold" size="lg" type="submit" className="w-full py-6 text-base">
            Confirmar Agendamento
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingSection;
