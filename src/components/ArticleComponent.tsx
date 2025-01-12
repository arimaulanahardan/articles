import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input"; // Import Input dari ShadCN UI
import { useFetchDataArticle } from "@/hooks/useFetchDataArticle";
import { Spinner } from "@/components/ui/spinner";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { debounce } from "lodash";
import { Clock8, MessageCircle, Search } from "lucide-react";

const ArticleComponent = () => {
  const { loading, data } = useFetchDataArticle();

  // State untuk pencarian dan kategori yang dipilih
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(data);

  const handleSearch = debounce((searchText: string) => {
    if (searchText.trim() === "") {
      setFilteredArticles(data);
    } else {
      const filtered = data.filter(
        (article) =>
          article.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredArticles(filtered);
    }
  }, 500);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredArticles(data);
    }
  }, [searchTerm, data]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Card>
      <CardHeader className="space-y-5">
        <CardTitle>Latest Articles</CardTitle>
        <div className="flex space-x-2 mb-4 items-center ">
          <Search size={20} className="text-gray-500" />
          <Input
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by title..."
            className="w-1/4"
          ></Input>
        </div>
      </CardHeader>
      <CardContent className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        {filteredArticles.length === 0 ? (
          <p className="text-center col-span-full">Sorry, no articles found.</p>
        ) : (
          filteredArticles.map((article) => (
            <Card key={article.id} className="flex flex-col h-full">
              <CardContent className="py-4 flex flex-col flex-grow space-y-4 relative">
                <Badge variant="secondary" className="absolute m-2">
                  {article.category?.name}
                </Badge>
                <img
                  src={article.cover_image_url}
                  alt={article.title}
                  className="h-40 w-full rounded-md object-cover"
                />
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center space-x-1">
                    <Clock8 size={16} />
                    <span>
                      {new Date(article.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle size={16} />
                    <span>{article.comments?.length ?? 0} Comments</span>
                  </div>
                </div>
                <CardTitle>{article.title}</CardTitle>
                <CardDescription>
                  {article.description.length > 200
                    ? `${article.description.slice(0, 200)}...`
                    : article.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button
                  variant="link"
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-xs"
                >
                  Read More
                  <ArrowRight size={16} />
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default ArticleComponent;
