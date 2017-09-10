import haxe.Resource;
import haxe.Template;
import sys.io.File;

typedef TemplateParams = {
    ?currentFormat:String,
    ?jostle:String,
    ?pageNumber:UInt,
    ?prevPageNumber:UInt,
    ?nextPageNumber:UInt,
    ?fontStyle:String,
    ?content:String,
};

class Main {
    public static function main() {
        var template = new Template(Resource.getString('html_template'));
        
        var data = Resource.getString('page_data').split('\n');
        while (data.remove('')) {}
        
        var dest = '..';
        
        generate('neat', '', template, Resource.getString('neat_text'), data, dest);
        generate('quaint', 'jostle', template, Resource.getString('quaint_text'), data, dest);
    }
    
    static function generate(currentFormat, jostle, template:Template, text:String, data:Array<String>, path) {
        var params:TemplateParams = {
            currentFormat:currentFormat,
            jostle:jostle,
        };
        
        var recipesByPageNumber:Map<UInt, String> = new Map();
        var recipeBlocks = text.split('page_');
        for (block in recipeBlocks) {
            var line = block.substr(0, block.indexOf('\n')).split(' ');
            while (line.remove('')) {}
            if (line.length == 0) continue;
            var pageNumber = Std.parseInt(line[0]);
            var recipe = block.substr(block.indexOf('\n') + 1);
            recipe = recipe.substr(0, recipe.lastIndexOf('\n'));
            recipesByPageNumber[pageNumber] = recipe;
        }
        
        var numEntries = data.length;
        
        for (ike in 0...numEntries) {
            var line = data[ike].split(' ');
            while (line.remove('')) {}
            
            var pageNumber:UInt = Std.parseInt(line[0]);
            params.pageNumber = pageNumber;
            params.prevPageNumber = (pageNumber ==          1) ? 0 : pageNumber - 1;
            params.nextPageNumber = (pageNumber == numEntries) ? 0 : pageNumber + 1;
            
            var recipe = recipesByPageNumber[pageNumber];
            
            var content = '';
            var numCardsBelow = Std.int(Math.ceil(10 * (1 - pageNumber / numEntries)));
            for (jen in 0...numCardsBelow) content = content + '<card></card>';
            
            var fontStyle = 'roman';
            switch (line[1]) {
                case 'Illustrated':
                    content = content + '<titlecard id="page_${pageNumber}_$currentFormat"></titlecard>';
                case 'Roman':
                    content = content + '<card><recipe>$recipe</recipe></card>';
                case 'Italic':
                    fontStyle = 'italic';
                    content = content + '<card><recipe>$recipe</recipe></card>';
            }
            params.fontStyle = fontStyle;
            params.content = content;
            
            var output = template.execute(params);
            
            File.saveContent('${path}/${pageNumber}_${currentFormat}.html', output);
        }
    }
}
