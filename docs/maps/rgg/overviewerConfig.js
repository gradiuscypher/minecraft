var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png"
        },
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "spawn": [
                3,
                80,
                12
            ],
            "showlocationmarker": true,
            "world": "world",
            "imgextension": "png",
            "base": "",
            "bgcolor": "#1a1a1a",
            "isOverlay": false,
            "name": "Daytime Render",
            "path": "day",
            "minZoom": 0,
            "maxZoom": 8,
            "last_rendertime": 1598226979,
            "center": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "north_direction": 0,
            "zoomLevels": 8,
            "defaultZoom": 1
        }
    ],
    "map": {
        "cacheTag": "1598227370",
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "zoom": true,
            "compass": true,
            "pan": true,
            "spawn": true,
            "overlays": true,
            "mapType": true,
            "coordsBox": true
        }
    }
};
