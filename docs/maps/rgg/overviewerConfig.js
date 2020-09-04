var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "maxZoom": 8,
            "world": "world",
            "base": "",
            "center": [
                3,
                80,
                12
            ],
            "north_direction": 0,
            "path": "day",
            "name": "Daytime Render",
            "minZoom": 0,
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "isOverlay": false,
            "spawn": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "showlocationmarker": true,
            "last_rendertime": 1599234979,
            "defaultZoom": 1,
            "zoomLevels": 8
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1599235371",
        "controls": {
            "coordsBox": true,
            "mapType": true,
            "spawn": true,
            "zoom": true,
            "overlays": true,
            "compass": true,
            "pan": true
        },
        "debug": true
    }
};
