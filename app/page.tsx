import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  Building2,
  GraduationCap,
  Mail,
  Phone,
  BookMarked,
  FlaskConical,
  Users,
  Award,
  Globe2,
} from "lucide-react";

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Header */}
        <Card className="border-t-4 border-t-blue-600">
          <CardHeader className="pb-4">
            <div className="flex flex-col gap-1">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Lý Lịch Khoa Học</p>
              <h1 className="text-3xl font-bold text-foreground">Nguyễn Trường Sơn</h1>
              <div className="flex flex-wrap gap-2 mt-1">
                <Badge variant="secondary">Tiến sỹ</Badge>
                <Badge variant="secondary">Giảng viên</Badge>
                <Badge className="bg-blue-600 text-white hover:bg-blue-700">NLP &amp; AI</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-muted-foreground">
                <Building2 className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Trường ĐH Khoa học Tự nhiên, ĐHQG-HCM</p>
                  <p>Khoa Công nghệ Thông tin</p>
                  <p>Bộ môn: Hệ thống Thông tin</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <GraduationCap className="h-4 w-4 shrink-0" />
                <span>Tiến sỹ — đạt năm <strong className="text-foreground">2018</strong></span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0" />
                <span>0933 171 329</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:ntson@fit.hcmus.edu.vn" className="text-blue-600 hover:underline">
                  ntson@fit.hcmus.edu.vn
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:ntson2002@gmail.com" className="text-blue-600 hover:underline">
                  ntson2002@gmail.com
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <GraduationCap className="h-5 w-5 text-blue-600" />
              Quá trình đào tạo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                degree: "Đại học",
                period: "9/2002 – 6/2006",
                school: "ĐH Khoa học Tự nhiên TP.HCM",
                major: "Công nghệ thông tin",
                thesis: "Nghiên cứu các thuật toán xếp lịch trong trường ĐH và xây dựng ứng dụng minh hoạ",
              },
              {
                degree: "Thạc sỹ",
                period: "10/2007 – 10/2010",
                school: "ĐH Khoa học Tự nhiên TP.HCM",
                major: "Khoa học máy tính",
                thesis: "Xây dựng hệ thống giám sát dịch bệnh dựa trên mạng xã hội",
              },
              {
                degree: "Tiến sỹ",
                period: "10/2015 – 9/2018",
                school: "Viện Khoa học Công nghệ Tiên tiến Nhật Bản (JAIST)",
                major: "Khoa học Thông tin",
                thesis: "Phân tích cấu trúc và nhận diện suy diễn trong văn bản luật sử dụng phương pháp học sâu",
              },
            ].map((edu, i) => (
              <div key={i} className="relative pl-4 border-l-2 border-blue-200 last:mb-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-semibold text-foreground">{edu.degree}</span>
                  <Badge variant="outline" className="font-mono text-xs">{edu.period}</Badge>
                </div>
                <p className="text-sm font-medium text-blue-700">{edu.school}</p>
                <p className="text-sm text-muted-foreground">Chuyên ngành: {edu.major}</p>
                <p className="text-sm text-muted-foreground italic mt-1">&ldquo;{edu.thesis}&rdquo;</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Research Fields */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <FlaskConical className="h-5 w-5 text-blue-600" />
              Lĩnh vực chuyên môn &amp; hướng nghiên cứu
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Chuyên môn</p>
              <div className="flex flex-wrap gap-2">
                {["Xử lý ngôn ngữ tự nhiên (NLP)", "Trí tuệ nhân tạo (AI)", "Khoa học máy tính", "Khoa học thông tin"].map((s) => (
                  <Badge key={s} className="bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100">{s}</Badge>
                ))}
              </div>
            </div>
            <Separator />
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Hướng nghiên cứu</p>
              <div className="flex flex-wrap gap-2">
                {["Khai thác văn bản", "Xử lý ngôn ngữ tự nhiên", "Học máy"].map((s) => (
                  <Badge key={s} variant="secondary">{s}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Research Projects */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BookMarked className="h-5 w-5 text-blue-600" />
              Đề tài nghiên cứu
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                title: "Xây dựng mô hình chọn câu trả lời cho hệ thống hỏi đáp pháp luật Việt Nam",
                level: "Cấp trường",
                period: "2020",
                budget: "50 triệu",
                role: "Chủ nhiệm",
                result: "Đạt",
                code: "CNTT-2020-14",
              },
              {
                title: "Mô hình gán nhãn ngữ nghĩa y sinh dựa trên ngữ pháp và quan hệ phụ thuộc",
                level: "Cấp trường",
                period: "2023",
                budget: "50 triệu",
                role: "Tham gia",
                result: "Đạt",
                code: null,
              },
            ].map((p, i) => (
              <div key={i} className="p-4 rounded-lg bg-muted/40 border space-y-2">
                <p className="font-medium text-foreground leading-snug">{p.title}</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Badge variant="outline">{p.level}</Badge>
                  <Badge variant="outline">{p.period}</Badge>
                  <Badge variant="outline">{p.budget}</Badge>
                  <Badge className={p.role === "Chủ nhiệm" ? "bg-emerald-100 text-emerald-700 border border-emerald-200 hover:bg-emerald-200" : "bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100"}>
                    {p.role}
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 border border-green-200 hover:bg-green-200">{p.result}</Badge>
                  {p.code && <span className="font-mono text-muted-foreground">#{p.code}</span>}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Graduate Students */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Users className="h-5 w-5 text-blue-600" />
              Hướng dẫn học viên cao học
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-muted-foreground">
                    <th className="text-left py-2 pr-4 font-medium">Học viên</th>
                    <th className="text-left py-2 pr-4 font-medium">Luận văn</th>
                    <th className="text-left py-2 font-medium">Năm</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { name: "Châu Chiêu Nguyên", thesis: "Hệ thống hỏi đáp tự động cho văn bản pháp luật Việt Nam", year: 2021 },
                    { name: "Lê Anh Khôi", thesis: "Kết hợp học tương phản trong tóm tắt văn bản tiếng Việt với mô hình BERT", year: 2021 },
                    { name: "Trần Anh Kiên", thesis: "Hệ thống thông minh hỗ trợ phân loại thô cho bệnh nhân nhập viện", year: 2022 },
                    { name: "Tiêu Trường Thịnh", thesis: "Nghiên cứu các phương pháp phân loại cặp cho văn bản luật Việt Nam", year: 2022 },
                    { name: "Đặng Nhật Minh", thesis: "Kỹ thuật kết hợp câu ngữ cảnh cho bài toán chiết xuất từ vựng khía cạnh", year: 2023 },
                    { name: "Nguyễn Trung Hậu", thesis: "Nghiên cứu các phương pháp cho bài toán hỏi đáp pháp luật", year: 2023 },
                    { name: "Trần Thanh Mộng", thesis: "Xây dựng hệ thống Cổng Dịch vụ công theo kiến trúc phân tán", year: 2024 },
                    { name: "Nguyễn Hà Minh Anh", thesis: "Cải thiện kỹ năng giải toán cho mô hình ngôn ngữ vừa và nhỏ", year: 2024 },
                  ].map((s, i) => (
                    <tr key={i} className="hover:bg-muted/30">
                      <td className="py-2.5 pr-4 font-medium whitespace-nowrap">{s.name}</td>
                      <td className="py-2.5 pr-4 text-muted-foreground">{s.thesis}</td>
                      <td className="py-2.5">
                        <Badge variant="outline" className="font-mono">{s.year}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Publications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BookOpen className="h-5 w-5 text-blue-600" />
              Công trình đã công bố
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">

            {/* ISI Journals */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                <Globe2 className="h-4 w-4" /> Tạp chí quốc tế (ISI)
              </h3>
              <div className="space-y-3">
                {[
                  {
                    authors: "Son Nguyen Truong, Nguyen Le Minh, Ken Satoh, Tojo Satoshi and Akira Shimazu",
                    title: "Recurrent neural network-based models for recognizing requisite and effectuation parts in legal texts",
                    venue: "Artificial Intelligence and Law",
                    year: "2018",
                    issn: "0924-8463",
                    if_score: "3.3",
                  },
                  {
                    authors: "Collier, Nigel, Nguyen Truong Son, and Ngoc Mai Nguyen",
                    title: "OMG U got flu? Analysis of shared health messages for bio-surveillance",
                    venue: "Journal of Biomedical Semantics 2011, 2(Suppl 5):S9",
                    year: "2011",
                    issn: "2041-1480",
                    if_score: "2.0",
                  },
                ].map((pub, i) => (
                  <div key={i} className="p-3 rounded-md border bg-card space-y-1">
                    <p className="text-sm font-medium text-foreground">&ldquo;{pub.title}&rdquo;</p>
                    <p className="text-xs text-muted-foreground">{pub.authors}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-xs text-blue-700 font-medium">{pub.venue}</span>
                      <Badge variant="outline" className="font-mono text-xs">{pub.year}</Badge>
                      <Badge className="bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs hover:bg-emerald-200">ISI</Badge>
                      <span className="text-xs text-muted-foreground">ISSN: {pub.issn}</span>
                      <span className="text-xs text-muted-foreground">IF: {pub.if_score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* International Conferences */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                <Award className="h-4 w-4" /> Kỷ yếu Hội nghị Quốc tế
              </h3>
              <div className="space-y-3">
                {[
                  {
                    title: "VMLU Benchmarks: A comprehensive benchmark toolkit for Vietnamese LLMs",
                    venue: "ACL 2025 (The 63rd Annual Meeting of the Association for Computational Linguistics)",
                    year: "2025",
                    id: "2025.acllong.563",
                    role: "Đồng tác giả",
                  },
                  {
                    title: "Embedding-Based Retrieval Approaches for Automated Citation Prediction",
                    venue: "SCIDOCA 2025 (Ninth International Workshop on SCIentific DOCument Analysis)",
                    year: "2025",
                    id: "978-981-967070-3",
                    role: "Đồng tác giả",
                  },
                  {
                    title: "Contrastive Learning for Vietnamese Abstractive Summarization",
                    venue: "KSE 2023",
                    year: "2023",
                    id: "979-8-35032975-9",
                    role: null,
                  },
                  {
                    title: "Ensemble Learning Methods for Legal Processing Tasks in ALQAC 2022",
                    venue: "14th International Conference on Knowledge and Systems Engineering (KSE)",
                    year: "2022",
                    id: "978-1-66545282-3",
                    role: "Đồng tác giả",
                  },
                  {
                    title: "ALQAC 2022: A Summary of the Competition",
                    venue: "14th International Conference on Knowledge and Systems Engineering (KSE)",
                    year: "2022",
                    id: "978-1-66545282-3",
                    role: "Đồng tác giả",
                  },
                  {
                    title: "SPBERT: An Efficient Pre-training BERT on SPARQL Queries for Question Answering over Knowledge Graphs",
                    venue: "The 28th International Conference on Neural Information Processing (ICONIP 2021)",
                    year: "2021",
                    id: "978-3-03092184-2",
                    role: "Đồng tác giả",
                  },
                  {
                    title: "Apply Bert-based models and Domain knowledge for Automated Legal Question Answering tasks at ALQAC 2021",
                    venue: "13th International Conference on Knowledge and Systems Engineering (KSE)",
                    year: "2021",
                    id: "978-1-66549976-7",
                    role: "Đồng tác giả",
                  },
                  {
                    title: "A Summary of the ALQAC 2021 Competition",
                    venue: "13th International Conference on Knowledge and Systems Engineering (KSE)",
                    year: "2021",
                    id: "978-1-66549976-7",
                    role: "Đồng tác giả",
                  },
                  {
                    title: "Effective combination of Bert model and cross-sentence contexts in aspect term extraction",
                    venue: "International Conference on Data Mining and NLP (ICDM 2021)",
                    year: "2021",
                    id: "10.5121/csit.2021.111210",
                    role: "Đồng tác giả",
                  },
                  {
                    title: "Hierarchical Transformer Encoders for Vietnamese Spelling Correction",
                    venue: "The 34th International Conference on IEA/AIE 2021",
                    year: "2021",
                    id: "978-3-03079456-9",
                    role: "Đồng tác giả",
                  },
                  {
                    title: "VNLawBERT: A Vietnamese Legal Answer Selection Approach Using BERT Language Model",
                    venue: "NAFOSTED Conference on Information and Computer Science 2020",
                    year: "2020",
                    id: "978-1-66540518-8",
                    role: "Đồng tác giả",
                  },
                ].map((pub, i) => (
                  <div key={i} className="p-3 rounded-md border bg-card space-y-1">
                    <p className="text-sm font-medium text-foreground">&ldquo;{pub.title}&rdquo;</p>
                    <p className="text-xs text-blue-700 font-medium">{pub.venue}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <Badge variant="outline" className="font-mono text-xs">{pub.year}</Badge>
                      {pub.role && <Badge variant="secondary" className="text-xs">{pub.role}</Badge>}
                      <span className="text-xs font-mono text-muted-foreground">{pub.id}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Language */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Globe2 className="h-5 w-5 text-blue-600" />
              Trình độ ngoại ngữ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Nghe: Tốt", "Nói: Tốt", "Viết: Tốt", "Đọc hiểu: Tốt"].map((s) => (
                <div key={s} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200">
                  <span className="h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-blue-800 font-medium">{s}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-xs text-muted-foreground pb-4">
          <p>Khai ngày 15 tháng 5 năm 2025 — Nguyễn Trường Sơn</p>
        </div>
      </div>
    </div>
  );
}
