var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "UPPERRIGHT": 1,
        "tileSize": 384
    },
    "tilesets": [
        {
            "spawn": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "maxZoom": 8,
            "isOverlay": false,
            "minZoom": 0,
            "world": "world",
            "zoomLevels": 8,
            "path": "day",
            "last_rendertime": 1596974179,
            "imgextension": "png",
            "north_direction": 0,
            "name": "Daytime Render",
            "base": "",
            "bgcolor": "#1a1a1a",
            "center": [
                3,
                80,
                12
            ],
            "defaultZoom": 1,
            "showlocationmarker": true
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1596974564",
        "debug": true,
        "controls": {
            "spawn": true,
            "pan": true,
            "zoom": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true,
            "compass": true
        }
    }
};
