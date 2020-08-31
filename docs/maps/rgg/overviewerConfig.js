var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "image": {
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png"
        },
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "poititle": "Markers",
            "last_rendertime": 1598882179,
            "maxZoom": 8,
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "zoomLevels": 8,
            "base": "",
            "defaultZoom": 1,
            "path": "day",
            "minZoom": 0,
            "world": "world",
            "north_direction": 0,
            "spawn": [
                3,
                80,
                12
            ],
            "center": [
                3,
                80,
                12
            ],
            "showlocationmarker": true,
            "isOverlay": false,
            "name": "Daytime Render"
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1598882571",
        "debug": true,
        "controls": {
            "compass": true,
            "coordsBox": true,
            "mapType": true,
            "spawn": true,
            "pan": true,
            "overlays": true,
            "zoom": true
        }
    }
};
