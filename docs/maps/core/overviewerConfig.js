var overviewerConfig = {
    "tilesets": [
        {
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "isOverlay": false,
            "maxZoom": 10,
            "zoomLevels": 10,
            "showlocationmarker": true,
            "name": "Daytime Render",
            "imgextension": "png",
            "spawn": [
                80,
                96,
                192
            ],
            "base": "",
            "center": [
                80,
                96,
                192
            ],
            "path": "day",
            "poititle": "Markers",
            "last_rendertime": 1598363880,
            "world": "Core01",
            "defaultZoom": 1,
            "north_direction": 0
        }
    ],
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png"
        },
        "tileSize": 384,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3
    },
    "map": {
        "cacheTag": "1598364085",
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "mapType": true,
            "spawn": true,
            "pan": true,
            "zoom": true,
            "overlays": true,
            "coordsBox": true
        }
    }
};
