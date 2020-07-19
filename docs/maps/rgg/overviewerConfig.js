var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png"
        }
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "defaultZoom": 1,
            "minZoom": 0,
            "maxZoom": 8,
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "center": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "north_direction": 0,
            "path": "day",
            "world": "world",
            "last_rendertime": 1595130979,
            "spawn": [
                3,
                80,
                12
            ],
            "isOverlay": false,
            "showlocationmarker": true,
            "zoomLevels": 8,
            "base": ""
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1595131360",
        "controls": {
            "compass": true,
            "mapType": true,
            "overlays": true,
            "zoom": true,
            "pan": true,
            "spawn": true,
            "coordsBox": true
        }
    }
};
