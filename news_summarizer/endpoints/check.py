from langchain_community.document_loaders import RSSFeedLoader
from langchain_openai import ChatOpenAI
from langchain_core.pydantic_v1 import BaseModel, Field
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import PydanticOutputParser

# def summarize(content,llm):
#     prompt_template = PromptTemplate.from_template(
#     "Summarize the news content :\
#     {content} ")
 
#     chain =  prompt_template | llm
#     summary = chain.invoke(input = {"content" : content})
#     return summary.content

# llm = ChatOpenAI(
#     model="tiiuae/falcon-180B-chat",
#     api_key="api71-api-6cfa0f42-0cbf-46ce-b14f-43947f037f46",
#     base_url="https://api.ai71.ai/v1/",)

# interests = " Paris Olympics"


# class FitInterest(BaseModel):
#     """Whether the news fit with user's interests."""
#     fit_interests: bool = Field(description="Do the news fit the user's interest?")

# interest_parser = PydanticOutputParser(pydantic_object=FitInterest)
# prompt_interests = PromptTemplate.from_template(
#     """You are an expert news analyst which needs to check if a  news  is\
#        according to any of the user's interests. The user expressed the \
#        following interests:
#         {interests}
       
#        Please establish whether the following news match the user's interests, return True only and only if it 100% matches the interests:

#        Title of news: {title}
#        Description of news: {description}
#        Respond with True or False
#        Wrap the output in `json` tags\n{format_instructions}""")



# partial_interests = prompt_interests.partial(interests=interests,format_instructions=interest_parser.get_format_instructions())
# interests_chain = partial_interests | llm | interest_parser
# summaries = []
# for i in range(len(data)):
#     print(data[i].metadata["title"] + "      " + data[i].metadata["description"])
#     print("\n")
#     try:
#         test = interests_chain.invoke(input={"title":data[i].metadata["title"] ,"description" : data[i].metadata["description"]})
#     except:
#         continue
#         # test = FitInterest(fit_interests = False)
#     if test.fit_interests:
#         summary = summarize(data[i].page_content,llm)
#         summaries.append(summary)
#     print(test)
#     print("\n")

# print("Summary  :" , summaries)
