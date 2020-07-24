var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "image": {
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png"
        }
    },
    "tilesets": [
        {
            "zoomLevels": 8,
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "poititle": "Markers",
            "name": "Daytime Render",
            "minZoom": 0,
            "defaultZoom": 1,
            "last_rendertime": 1595580979,
            "path": "day",
            "world": "world",
            "base": "",
            "north_direction": 0,
            "showlocationmarker": true,
            "center": [
                3,
                80,
                12
            ],
            "spawn": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "isOverlay": false
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "cacheTag": "1595581386",
        "debug": true,
        "controls": {
            "pan": true,
            "coordsBox": true,
            "mapType": true,
            "zoom": true,
            "overlays": true,
            "spawn": true,
            "compass": true
        },
        "north_direction": "lower-left"
    }
};
