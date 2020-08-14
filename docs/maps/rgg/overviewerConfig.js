var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "world": "world",
            "imgextension": "png",
            "defaultZoom": 1,
            "maxZoom": 8,
            "poititle": "Markers",
            "isOverlay": false,
            "spawn": [
                3,
                80,
                12
            ],
            "showlocationmarker": true,
            "center": [
                3,
                80,
                12
            ],
            "name": "Daytime Render",
            "zoomLevels": 8,
            "north_direction": 0,
            "base": "",
            "last_rendertime": 1597380979,
            "path": "day"
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "coordsBox": true,
            "overlays": true,
            "pan": true,
            "zoom": true,
            "spawn": true,
            "mapType": true
        },
        "debug": true,
        "cacheTag": "1597381362"
    }
};
