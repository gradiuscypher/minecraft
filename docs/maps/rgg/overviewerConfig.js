var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "tileSize": 384,
        "UPPERLEFT": 0,
        "image": {
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png"
        }
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "base": "",
            "poititle": "Markers",
            "world": "world",
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "center": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "zoomLevels": 8,
            "maxZoom": 8,
            "north_direction": 0,
            "spawn": [
                3,
                80,
                12
            ],
            "path": "day",
            "name": "Daytime Render",
            "isOverlay": false,
            "last_rendertime": 1598108179,
            "showlocationmarker": true,
            "defaultZoom": 1
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1598108567",
        "controls": {
            "overlays": true,
            "pan": true,
            "zoom": true,
            "compass": true,
            "mapType": true,
            "spawn": true,
            "coordsBox": true
        }
    }
};
